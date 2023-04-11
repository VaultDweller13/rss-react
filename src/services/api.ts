const API_KEY = '5fbcc2bba65e461196bc166ce8c8c946';
const endpoint = 'https://api.rawg.io/api/games';

type QueryParams = Record<string, string>;
type RawGameData = { results: [] };

enum Platforms {
  PC = '1',
  SWITCH = '7',
}

async function getRawGamesData(search = '') {
  const params = {
    platforms: Platforms.SWITCH,
    ordering: '-metacritic',
    search: search,
    search_precise: 'false',
    key: API_KEY,
  };

  const { error, data } = await fetchData('', params);

  return { error, data: (data as RawGameData).results || [] };
}

async function getDataById(id: number) {
  const { error, data } = await fetchData(`/${id}`, {
    key: API_KEY,
  });

  return { error, data };
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
  let query = '';

  if (params) {
    query = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
  }

  return `${url}${path}?${query}`;
}

export { getRawGamesData, getDataById };
