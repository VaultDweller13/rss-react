import CardButtons from './CardButtons';
import { metacritic_icon } from '../../assets/';
import './Card.css';

export type CardProps = {
  id: number;
  title: string;
  date: string;
  platform: string;
  genres: string[];
  format: 'digital' | 'physical';
  img: string;
  price: string;
  score: number | null;
  onClick: (id: number) => void;
};

export function Card(props: CardProps) {
  const genres = props.genres.map((genre, index) => (
    <span key={index} className="genres_item">
      {genre}
    </span>
  ));

  const date = new Date(props.date).toLocaleString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="card" onClick={() => props.onClick(props.id)}>
      <img className="card_image" src={props.img} alt="Game cover" />
      <h3 className="card_title">{props.title}</h3>
      <div className="card_genres">{genres}</div>
      <div className="card_purchase">
        <p className="card_price">{props.price}</p>
        <p className="card_format">{props.format}</p>
      </div>
      <div className="card_score">
        <img className="score_icon" src={metacritic_icon} />
        <span className={`score_value ${getScoreColorClass(props.score)}`}>
          {props.score || 'N/A'}
        </span>
      </div>
      <CardButtons platform={props.platform} />
      <p className="card_date">Release date: {date}</p>
    </div>
  );
}

function getScoreColorClass(score: CardProps['score']) {
  if (!score) return 'score_value__missing';
  if (score > 75) return 'score_value__high';
  if (score > 50) return 'score_value__average';

  return 'score_value__low';
}
