const API_KEY: string = import.meta.env.VITE_API_KEY;
const endpoint = 'https://api.rawg.io/api/games';

type QueryParams = Record<string, string>;

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

  return (await fetchData('', params)).results;
}

function getDataById(id: number) {
  return fetchData(`/${id}`, {
    key: API_KEY,
  });
}

async function fetchData(path: string, params: QueryParams) {
  const url = createUrl(endpoint, path, params);
  const response = await fetch(url, { mode: 'cors' });

  return response.json();
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
