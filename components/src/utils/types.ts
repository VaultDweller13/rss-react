type CustomCardProps = {
  title: string;
  date: string;
  platform: string;
  genres: string[];
  format: 'digital' | 'physical';
  img: string;
  price: string;
  score: number | null;
};

export type { CustomCardProps };
