import { metacritic_icon } from '../../assets';
import CardButtons from './CardButtons';
import './CardLarge.css';

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
    <>
      <div className="card-large">
        <h3 className="card_title">{props.title}</h3>
        <img className="card-large_image" src={props.img} alt="Game cover" />
        <div className="card_genres card-large_genres">{genres}</div>
        <div className="card_purchase card-large_purchase">
          <p className="card_price">{props.price}</p>
          <p className="card_format">{props.format}</p>
        </div>
        <div className="card_score card-large_score">
          <img className="score_icon" src={metacritic_icon} />
          <span className={`score_value ${getScoreColorClass(props.score)}`}>
            {props.score || 'N/A'}
          </span>
        </div>
        <CardButtons platform={props.platform} className="card-large_buttons" />
        <p className="card_date card-large_date">Release date: {date}</p>
        <p
          className="card-large_description"
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></p>
      </div>
    </>
  );

  function getScoreColorClass(score: number) {
    if (!score) return 'score_value__missing';
    if (score > 75) return 'score_value__high';
    if (score > 50) return 'score_value__average';

    return 'score_value__low';
  }
}
