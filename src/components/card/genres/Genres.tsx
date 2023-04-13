import styles from './Genres.module.css';

type Props = {
  genres: string[];
  gridSpan?: 'small' | 'large';
};

export function Genres({ genres, gridSpan = 'large' }: Props) {
  const items = genres.map((genre, index) => (
    <span key={index} className={styles.item}>
      {genre}
    </span>
  ));

  return <div className={`${styles.container} ${styles[gridSpan]}`}>{items}</div>;
}
