import React from 'react';
import CardButtons from './CardButtons';

import './Card.css';
import icon from '../../assets/img/metacritic-icon.svg';

type CardProps = {
  title: string;
  img: string;
  price: string;
  score: string;
};

export default class Card extends React.Component<CardProps> {
  render() {
    return (
      <div className="card">
        <img className="card_image" src={this.props.img} />
        <h3 className="card_title">{this.props.title}</h3>
        <p className="card_price">{this.props.price}</p>
        <div className="card_score">
          <img className="score_icon" src={icon} />
          <span className="score_value">{this.props.score}</span>
        </div>
        <CardButtons />
      </div>
    );
  }
}
