import Card from './Card';
import { getData } from '../../services/api';
import { useEffect, useState } from 'react';

type Platform = {
  id: number;
  // name: 'PC' | 'Playstation' | 'Xbox' | 'Nintendo';
  name: string;
};

type Tag = {
  id: number;
  name: string;
};

type GameData = {
  id: number;
  name: string;
  released: string;
  parent_platforms: Record<'platform', Platform>[];
  tags: Tag[];
  background_image: string;
  metacritic: number;
};

export default function CardContainer() {
  const [data, setData] = useState<GameData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setData(await getData());
    };

    fetchData();
  }, []);

  const gamesArray = data.map((game) => ({
    id: game.id,
    title: game.name,
    date: game.released,
    platform: game.parent_platforms[0].platform.name,
    genres: game.tags.map((tag) => tag.name),
    format: 'digital' as const,
    img: game.background_image,
    price: '59.99',
    score: game.metacritic,
  }));

  const cards = gamesArray.map((game) => <Card key={game.id} {...game} img={game.img} />);

  return <section className="cards-container">{cards}</section>;
}
