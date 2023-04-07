const API_KEY: string = import.meta.env.VITE_API_KEY;
const endpoint = 'https://api.rawg.io/api/';

async function getData(query = 'games') {
  const url = `${endpoint}${query}?key=${API_KEY}`;
  const response = await fetch(url, {
    mode: 'cors',
  });

  return (await response.json()).results;
}

export { getData };
