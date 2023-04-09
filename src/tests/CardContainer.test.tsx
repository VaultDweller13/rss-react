import { render, screen, fireEvent } from '@testing-library/react';

import { CardContainer } from '../components';

describe('CardContainer', () => {
  it('should render <Card> elements', async () => {
    render(<CardContainer searchQuery="" />);

    expect(await screen.findByText('Fire Emblem: Three Houses')).toBeInTheDocument;
    expect(await screen.findByText('The Legend of Zelda: Breath of the Wild')).toBeInTheDocument;
  });
});

describe('CardContainer', () => {
  it('should render modal window on card click', async () => {
    render(<CardContainer searchQuery="" />);
    const card = await screen.findByText('Fire Emblem: Three Houses');

    fireEvent.click(card);
    const modal = await screen.findByText(
      'Fire Emblem: Three Houses is a RPG-strategy game developed by Koei Tecmo and Intelligent Systems.'
    );

    expect(modal).toBeInTheDocument;
  });
});
