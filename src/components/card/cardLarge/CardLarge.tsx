import { CardButtons, Genres, Score, ReleaseDate } from '../';
import styles from './CardLarge.module.css';

export type LargeCardProps = {
  id: number;
  title: string;
  date: string;
  platform: string;
  genres: string[];
  format: 'digital' | 'physical';
  img: string;
  price: string;
  score: number;
  description: string;
};

export function CardLarge(props: LargeCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{props.title}</h3>
      <img className={styles.image} src={props.img} alt="Game cover" />
      <Genres genres={props.genres} gridSpan="small" />
      <div className={styles.purchase}>
        <div>
          <span className={styles.price}>{props.price}</span>
          <span className={styles.format}>{props.format}</span>
        </div>
        <Score value={props.score} />
      </div>
      <CardButtons platform={props.platform} className={styles.buttons} />
      <ReleaseDate date={props.date} />
      <p className={styles.description} dangerouslySetInnerHTML={{ __html: props.description }} />
    </div>
  );
}
