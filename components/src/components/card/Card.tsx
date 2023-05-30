import React from 'react';
import CardButtons from './CardButtons';

import './Card.css';
import icon from '../../assets/img/metacritic-icon.svg';

type CardProps = {
  title: string;
  img: string;
  price: string;
  score: number | null;
};

export default class Card extends React.Component<CardProps> {
  render() {
    return (
      <div className="card">
        <img className="card_image" src={this.props.img} alt="Game cover" />
        <h3 className="card_title">{this.props.title}</h3>
        <p className="card_price">{this.props.price}</p>
        <div className="card_score">
          <img className="score_icon" src={icon} />
          <span className={`score_value ${this.getScoreColorClass()}`}>
            {this.props.score || 'N/A'}
          </span>
        </div>
        <CardButtons />
      </div>
    );
  }

  getScoreColorClass() {
    const { score } = this.props;

    if (!score) return 'score_value__missing';
    if (score > 75) return 'score_value__high';
    if (score > 50) return 'score_value__average';

    return 'score_value__low';
  }
}
