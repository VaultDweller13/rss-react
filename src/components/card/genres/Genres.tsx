import classNames from 'classnames';
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

  const genresClass = classNames(styles.container, styles[gridSpan]);

  return <div className={genresClass}>{items}</div>;
}
