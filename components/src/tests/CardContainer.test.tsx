import { render, screen } from '@testing-library/react';

import CardContainer from '../components/CardContainer';

describe('CardContainer', () => {
  it('should render <Card> elements', () => {
    render(<CardContainer />);

    expect(screen.getByText('Fire Emblem: Three Houses')).toBeInTheDocument;
    expect(screen.getByText('The Legend of Zelda: Breath of the Wild')).toBeInTheDocument;
  });
});
