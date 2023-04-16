import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { Card } from '../';
import { CardLarge } from '../card';
import { Modal, Spinner } from '..';
import { type GameData } from '../../services/api';
import { fetchDataById, fetchGamesData, clearCurrentGame } from './gameDataSlice';
import styles from './CardContainer.module.css';

export default function CardContainer() {
  const dispatch = useAppDispatch();

  const searchQuery = useAppSelector((state) => state.search);
  const data = useAppSelector((state) => state.gameData.fetchedGames);
  const currentGameData = useAppSelector((state) => state.gameData.fetchedById);
  const error = useAppSelector((state) => state.gameData.error);

  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentId, setCurrentId] = useState<number>();

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
    dispatch(fetchGamesData(searchQuery));
  }, [dispatch, searchQuery]);

  useEffect(() => {
    if (!currentId) return;

    dispatch(fetchDataById(currentId));

    return () => {
      dispatch(clearCurrentGame());
    };
  }, [dispatch, currentId]);

  const cards = data
    .map(getGameObject)
    .map((game) => game && <Card key={game.id} {...game} onClick={handleClick} />);
  const currentGame = currentGameData && getGameObject(currentGameData);
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
