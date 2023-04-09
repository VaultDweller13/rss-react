import { Card, CardProps } from './Card';
import { Modal } from '../';
import { getRawGamesData, getDataById } from '../../services/api';
import { useEffect, useState } from 'react';

type Platform = {
  id: number;
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
  const [active, setActive] = useState(false);
  const [currentId, setCurrentId] = useState<number>();
  const [currentGame, setCurrentGame] = useState<CardProps>();

  const handleClick = (id: number) => {
    setActive(true);
    setCurrentId(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      setData(await getRawGamesData(searchQuery));
    };

    fetchData();
  }, [searchQuery]);

  useEffect(() => {
    if (!currentId) return;

    const fetchData = async () => {
      const gameData = (await getDataById(currentId)) as GameData;

      setCurrentGame({
        id: gameData.id,
        title: gameData.name,
        date: gameData.released,
        platform: 'switch',
        genres: ['N/A'],
        format: 'digital' as const,
        img: gameData.background_image,
        price: '59.99',
        score: gameData.metacritic,
        onClick: () => {},
      });
    };

    fetchData();
  }, [currentId]);

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

  const cards = gamesArray.map((game) => (
    <Card key={game.id} {...game} img={game.img} onClick={handleClick} />
  ));

  return (
    <>
      <section className="cards-container">{cards}</section>;
      <Modal
        active={active}
        setActive={setActive}
        child={
          (currentGame && <Card key={currentGame.id} {...currentGame} onClick={() => {}} />) || (
            <>Loading...</>
          )
        }
      />
    </>
  );
}
