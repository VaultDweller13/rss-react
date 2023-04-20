import { CardButtons, Genres, Score } from '../';
import styles from './Card.module.css';

export type CardProps = {
  id: number;
  title: string;
  date: string;
  platform: string;
  genres: string[];
  format: 'digital' | 'physical';
  img: string;
  price: string;
  score: number | undefined;
  onClick: (id: number) => void;
};

export function Card(props: CardProps) {
  const date = new Date(props.date).toLocaleString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={styles.card} onClick={() => props.onClick(props.id)}>
      <img className={styles.image} src={props.img} alt="Game cover" />
      <h3 className={styles.title}>{props.title}</h3>
      <Genres genres={props.genres} />
      <div className={styles.purchase}>
        <p className={styles.price}>{props.price}</p>
        <p className={styles.format}>{props.format}</p>
      </div>
      <Score value={props.score} />
      <CardButtons platform={props.platform} />
      <p className={styles.date}>Release date: {date}</p>
    </div>
  );
}
