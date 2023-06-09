const API_KEY = import.meta.env.VITE_API_KEY;
const endpoint = 'https://api.rawg.io/api/games';

type QueryParams = Record<string, string>;
type RawGameData = { count: number; results: [] };
type BaseEntity = {
  id: number;
  name: string;
};

type GameData = {
  id: number;
  name: string;
  released: string;
  parent_platforms: Record<'platform', BaseEntity>[];
  genres: BaseEntity[];
  background_image: string;
  metacritic: number;
  description?: string;
};

enum Platforms {
  PC = '1',
  SWITCH = '7',
}

async function getRawGamesData(search = '', page?: number) {
  const pageNumber = page ? String(page) : '1';
  const params = {
    platforms: Platforms.SWITCH,
    ordering: '-metacritic',
    search,
    search_precise: 'false',
    page: pageNumber,
    key: API_KEY,
  };

  const { error, data } = await fetchData('', params);

  return {
    error,
    data: { ...(data as RawGameData) },
  };
}

async function getDataById(id: number) {
  const { error, data } = await fetchData(`/${id}`, {
    key: API_KEY,
  });

  return { error, data: data as GameData };
}

async function fetchData(path: string, params: QueryParams) {
  const url = createUrl(endpoint, path, params);
  const result: { error: string; data: unknown } = {
    error: '',
    data: [],
  };

  try {
    const response = await fetch(url, { mode: 'cors' });

    if (!response.ok) throw Error('Could not fetch data from server');

    result.data = await response.json();
  } catch (e) {
    if (e instanceof Error) result.error = e.message;
  }

  return result;
}

function createUrl(url: string, path?: string, params?: QueryParams) {
  const query = new URLSearchParams(params);
  return `${url}${path}?${query}`;
}

export { getRawGamesData, getDataById, type GameData };
