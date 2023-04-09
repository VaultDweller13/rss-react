import { render, screen } from '@testing-library/react';

import { Card } from '../components/';

const data = {
  id: 1,
  title: 'Bravely Default 2',
  date: '02-26-2021',
  platform: 'switch',
  format: 'digital' as const,
  genres: ['JRPG'],
  img: '1.jpg',
  price: '59.99€',
  score: 76,
};

describe('Card', () => {
  it('should render game title', () => {
    render(<Card {...data} onClick={() => {}} />);
    expect(screen.getByRole('heading')).toHaveTextContent(data.title);
  });

  it('should have game cover image', () => {
    render(<Card {...data} onClick={() => {}} />);
    expect(screen.getAllByRole('img')[0]).toHaveAccessibleName('Game cover');
  });
});
