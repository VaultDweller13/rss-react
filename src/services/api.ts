const API_KEY: string = import.meta.env.VITE_API_KEY;
const endpoint = 'https://api.rawg.io/api/games';

enum Platforms {
  PC = '1',
  SWITCH = '7',
}

const params = {
  platforms: Platforms.SWITCH,
  ordering: '-metacritic',
  exclude_additions: 'true',
  key: API_KEY,
};

async function getRawGamesData() {
  const url = createUrl(endpoint, params);
  const response = await fetch(url, { mode: 'cors' });

  return (await response.json()).results;
}

function createUrl(url: string, params: Record<string, string>) {
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return `${url}?${query}`;
}

export { getRawGamesData };
