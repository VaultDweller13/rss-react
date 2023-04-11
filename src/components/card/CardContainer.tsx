import { Card } from './Card';
import { CardLarge, LargeCardProps } from './CardLarge';
import { Modal, Spinner } from '../';
import { getRawGamesData, getDataById } from '../../services/api';
import { useEffect, useState } from 'react';

type FetchedName = {
  name: string;
};

type GameData = {
  id: number;
  name: string;
  released: string;
  parent_platforms: Record<'platform', FetchedName>[];
  genres: FetchedName[];
  background_image: string;
  metacritic: number;
  description?: string;
};

type CardContainerProps = {
  searchQuery: string;
};

export default function CardContainer(props: CardContainerProps) {
  const { searchQuery } = props;
  const [data, setData] = useState<GameData[]>([]);
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentId, setCurrentId] = useState<number>();
  const [currentGame, setCurrentGame] = useState<LargeCardProps>();

  const handleClick = (id: number) => {
    setActive(true);
    setCurrentId(id);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      setData(await getRawGamesData(searchQuery));
      setIsLoading(false);
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
        genres: gameData.genres.map((genre) => genre.name),
        format: 'digital' as const,
        img: gameData.background_image,
        price: '59.99',
        score: gameData.metacritic,
        description: gameData.description || '',
      });
    };

    fetchData();

    return () => setCurrentGame(undefined);
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
      <section className="cards-container">
        {!isLoading && !cards.length && <p className="cards_empty">No items found</p>}
        {isLoading ? <Spinner /> : cards}
      </section>
      <Modal
        active={active}
        setActive={setActive}
        child={(currentGame && <CardLarge {...currentGame} />) || <Spinner />}
      />
    </>
  );
}
