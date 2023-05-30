import { render, screen } from '@testing-library/react';

import Card from '../components/card/Card';

const data = {
  title: 'Fire Emblem: Three Houses',
  img: '4.jpg',
  price: '59.99€',
  score: '89',
};

describe('Card', () => {
  it('should render game title', () => {
    render(<Card {...data} />);
    expect(screen.getByRole('heading')).toHaveTextContent(data.title);
  });

  it('should have game cover image', () => {
    render(<Card {...data} />);
    expect(screen.getAllByRole('img')[0]).toHaveAccessibleName('Game cover');
  });
});
