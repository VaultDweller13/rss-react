import React from 'react';
import games from '../assets/data/games.json';
import CustomCard from './card/Card';

export default class CardContainer extends React.Component {
  render() {
    const cards = games.map((game) => (
      <CustomCard
        key={game.id}
        title={game.title}
        date={game.date}
        platform={game.platform}
        genres={game.genres}
        format={'physical'}
        img={`../img/cards/${game.img}`}
        price={game.price}
        score={game.score}
      />
    ));

    return <section className="cards-container">{cards}</section>;
  }
}
