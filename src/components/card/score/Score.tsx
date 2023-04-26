import { metacritic_icon } from '../../../assets';
import classNames from 'classnames';

import styles from './Score.module.css';

type ScoreProps = {
  value: number | undefined;
};

export function Score({ value }: ScoreProps) {
  const scoreValue = classNames(styles.scoreValue, getScoreColorClass(value));

  return (
    <div className={styles.score}>
      <img className={styles.scoreIcon} src={metacritic_icon} />
      <span className={scoreValue}>{value || 'N/A'}</span>
    </div>
  );
}

function getScoreColorClass(score: ScoreProps['value']) {
  if (!score) return styles.scoreMissing;
  if (score > 75) return styles.scoreHigh;
  if (score > 50) return styles.scoreAverage;

  return styles.scoreLow;
}
