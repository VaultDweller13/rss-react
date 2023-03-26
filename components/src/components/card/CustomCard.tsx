import React from 'react';

import CardButtons from './CardButtons';
import type { CustomCardProps } from '../../utils/types';
import './Card.css';
import icon from '../../assets/img/metacritic-icon.svg';

export default class Card extends React.Component<CustomCardProps> {
  render() {
    const genres = this.props.genres.map((genre, index) => (
      <span key={index} className="genres_item">
        {genre}
      </span>
    ));

    const date = new Date(this.props.date).toLocaleString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return (
      <div className="card">
        <img className="card_image" src={this.props.img} alt="Game cover" />
        <h3 className="card_title">{this.props.title}</h3>
        <div className="card_genres">{genres}</div>
        <div className="card_purchase">
          <p className="card_price">{this.props.price}€</p>
          <p className="card_format">{this.props.format}</p>
        </div>
        <div className="card_score">
          <img className="score_icon" src={icon} />
          <span className={`score_value ${this.getScoreColorClass()}`}>
            {this.props.score || 'N/A'}
          </span>
        </div>
        <CardButtons platform={this.props.platform} />
        <p className="card_date">Release date: {date}</p>
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
