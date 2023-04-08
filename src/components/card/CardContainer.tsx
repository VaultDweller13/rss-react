import Card from './Card';
import { getRawGamesData } from '../../services/api';
import { useEffect, useState } from 'react';

type Platform = {
  id: number;
  // name: 'PC' | 'Playstation' | 'Xbox' | 'Nintendo';
  name: string;
};

type Genre = {
  id: number;
  name: string;
};

type GameData = {
  id: number;
  name: string;
  released: string;
  parent_platforms: Record<'platform', Platform>[];
  genres: Genre[];
  background_image: string;
  metacritic: number;
};

type CardContainerProps = {
  searchQuery: string;
};

export default function CardContainer(props: CardContainerProps) {
  const { searchQuery } = props;
  const [data, setData] = useState<GameData[]>([]);
  console.log('props:', searchQuery);

  useEffect(() => {
    const fetchData = async () => {
      setData(await getRawGamesData(searchQuery));
    };

    fetchData();
  }, [searchQuery]);

  const gamesArray = data.map((game) => ({
    id: game.id,
    title: game.name,
    date: game.released,
    platform: 'switch',
    genres: game.genres.map((genre) => genre.name),
    format: 'digital' as const,
    img: game.background_image,
    price: '59.99',
    score: game.metacritic,
  }));

  const cards = gamesArray.map((game) => <Card key={game.id} {...game} img={game.img} />);

  return <section className="cards-container">{cards}</section>;
}
