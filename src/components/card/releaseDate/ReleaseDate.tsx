import styles from './ReleaseDate.module.css';

type ReleaseDateProps = {
  date: string;
};

export function ReleaseDate({ date }: ReleaseDateProps) {
  const formattedDate = new Date(date).toLocaleString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return <div className={styles.date}>Release date: {formattedDate}</div>;
}
