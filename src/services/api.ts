const API_KEY = import.meta.env.VITE_API_KEY;
const endpoint = 'https://api.rawg.io/api/';

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

type GenreData = {
  id: number;
  name: string;
  count: number;
  image: string;
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
  };

  const { error, data } = await fetchData('games', params);

  return {
    error,
    data: { ...(data as RawGameData) },
  };
}

async function getDataById(id: number) {
  const { error, data } = await fetchData(`games/${id}`);

  return { error, data: data as GameData };
}

async function getGenres() {
  const { error, data } = await fetchData('genres');

  return { error, data: (data as { result: GenreData[] }).result };
}

async function fetchData(path: string, params?: QueryParams) {
  const searchParams = new URLSearchParams(params);
  searchParams.set('key', API_KEY);
  const url = new URL(path, endpoint);
  url.search = searchParams.toString();

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

export { getRawGamesData, getDataById, getGenres, type GameData };
