import { rest } from 'msw';

const endpoint = 'https://api.rawg.io/api/games';

export const handlers = [
  rest.get(endpoint, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            id: 246478,
            name: 'Fire Emblem: Three Houses',
            released: '07-26-2019',
            parent_platforms: { platform: { id: 7, name: 'switch' } },
            genres: [
              { id: 1, name: 'TRPG' },
              { id: 2, name: 'Strategy' },
            ],
            background_image: '4.jpg',
            metacritic: 89,
          },
          {
            id: 6,
            name: 'The Legend of Zelda: Breath of the Wild',
            released: '03-03-2017',
            parent_platforms: { platform: { id: 7, name: 'switch' } },
            genres: [
              { id: 3, name: 'Action' },
              { id: 4, name: 'Adventure' },
            ],
            background_image: '6.jpg',
            metacritic: 97,
          },
        ],
      })
    );
  }),

  rest.get(`${endpoint}/${246478}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 246478,
        name: 'Fire Emblem: Three Houses',
        released: '07-26-2019',
        parent_platforms: { platform: { id: 7, name: 'switch' } },
        genres: [
          { id: 1, name: 'TRPG' },
          { id: 2, name: 'Strategy' },
        ],
        background_image: '4.jpg',
        metacritic: 89,
        description:
          'Fire Emblem: Three Houses is a RPG-strategy game developed by Koei Tecmo and Intelligent Systems.',
      })
    );
  }),
];
