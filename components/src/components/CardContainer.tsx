import React from 'react';
import games from '../assets/data/games.json';
import Card from './Card';

export default class CardContainer extends React.Component {
  render() {
    const cards = games.map((game) => (
      <Card key={game.id} title={game.title} img={`../img/cards/${game.img}`} price={game.price} />
    ));

    return <section className="cards-container">{cards}</section>;
  }
}
