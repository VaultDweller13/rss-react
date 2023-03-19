import { render, screen } from '@testing-library/react';

import Card from '../components/card/Card';

const data = {
  id: 4,
  title: 'Fire Emblem: Three Houses',
  img: '4.jpg',
  price: '59.99€',
  score: '89',
};

const card = (
  <Card
    key={data.id}
    title={data.title}
    img={`../img/cards/${data.img}`}
    price={data.price}
    score={data.score}
  />
);

describe('Card', () => {
  it('should render game title', () => {
    render(card);
    expect(screen.getByRole('heading')).toHaveTextContent(data.title);
  });

  it('should have game cover image', () => {
    render(card);
    expect(screen.getAllByRole('img')[0]).toHaveAccessibleName('Game cover');
  });
});
