import React from 'react';

type CardProps = {
  title: string;
  img: string;
  price: string;
};

export default class Card extends React.Component<CardProps> {
  render() {
    return (
      <div className="card">
        <img className="card_image" src={this.props.img} />
        <h3 className="card_title">{this.props.title}</h3>
        <p className="card_price">{this.props.price}</p>
      </div>
    );
  }
}
