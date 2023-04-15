import { useEffect, useState } from 'react';

import { Card } from '../';
import { CardLarge, LargeCardProps } from '../card';
import { Modal, Spinner } from '..';
import { getRawGamesData, getDataById, type GameData } from '../../services/api';
import styles from './CardContainer.module.css';

type CardContainerProps = {
  searchQuery: string;
};

export default function CardContainer(props: CardContainerProps) {
  const { searchQuery } = props;

  const [data, setData] = useState<GameData[]>([]);
  const [error, setError] = useState('');
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentId, setCurrentId] = useState<number>();
  const [currentGame, setCurrentGame] = useState<LargeCardProps>();

  const handleClick = (id: number) => {
    setActive(true);
    setCurrentId(id);
  };

  const getGameObject = (data: GameData) => {
    if (!data.id) return;

    return {
      id: data.id,
      title: data.name,
      date: data.released,
      platform: 'switch',
      genres: data.genres.map((genre) => genre.name),
      format: 'digital' as const,
      img: data.background_image,
      price: '59.99',
      score: data.metacritic,
      description: data.description || '',
    };
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const { error, data } = await getRawGamesData(searchQuery);
      setError(error);
      setData(data);
      setIsLoading(false);
    };

    fetchData();
  }, [searchQuery]);

  useEffect(() => {
    if (!currentId) return;

    const fetchData = async () => {
      const { error, data } = await getDataById(currentId);

      setError(error);
      setCurrentGame(getGameObject(data));
    };

    fetchData();

    return () => setCurrentGame(undefined);
  }, [currentId]);

  const cards = data
    .map(getGameObject)
    .map((game) => game && <Card key={game.id} {...game} onClick={handleClick} />);
  const isEmpty = !isLoading && !cards.length && !error;

  return (
    <>
      <section className={styles.container}>
        {isEmpty && <p className={styles.empty}>No items found</p>}
        {error && <p className={styles.empty}>{error}</p>}
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
