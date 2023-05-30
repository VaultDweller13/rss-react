import games from '../../assets/data/games.json';
import Card from './Card';

export default function CardContainer() {
  const cards = games.map((game) => (
    <Card key={game.id} format={'physical'} {...game} img={`../img/cards/${game.img}`} />
  ));

  return <section className="cards-container">{cards}</section>;
}
