import classNames from 'classnames';
import { metacritic_icon } from '../../../assets';
import { CardButtons, Genres } from '../';

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
  const date = new Date(props.date).toLocaleString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const scoreValue = classNames(styles.scoreValue, getScoreColorClass(props.score));

  return (
    <>
      <div className={styles.card}>
        <h3 className={styles.title}>{props.title}</h3>
        <img className={styles.image} src={props.img} alt="Game cover" />
        <Genres genres={props.genres} gridSpan="small" />
        <div className={styles.purchase}>
          <p className={styles.price}>{props.price}</p>
          <p className={styles.format}>{props.format}</p>
        </div>
        <div className={styles.score}>
          <img className={styles.scoreIcon} src={metacritic_icon} />
          <span className={scoreValue}>{props.score || 'N/A'}</span>
        </div>
        <CardButtons platform={props.platform} className={styles.buttons} />
        <p className={styles.date}>Release date: {date}</p>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></p>
      </div>
    </>
  );

  function getScoreColorClass(score: number) {
    if (!score) return styles.scoreMissing;
    if (score > 75) return styles.scoreHigh;
    if (score > 50) return styles.scoreAverage;

    return styles.scoreLow;
  }
}
