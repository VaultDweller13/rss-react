const API_KEY: string = import.meta.env.VITE_API_KEY;
const endpoint = 'https://api.rawg.io/api/games';

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
  const url = createUrl(endpoint, params);
  const response = await fetch(url, { mode: 'cors' });

  return (await response.json()).results;
}

async function getDataById(id: number) {
  const url = `${endpoint}/${id}?key=${API_KEY}`;
  const response = await fetch(url, { mode: 'cors' });

  return await response.json();
}

function createUrl(url: string, params: Record<string, string>) {
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return `${url}?${query}`;
}

export { getRawGamesData, getDataById };
