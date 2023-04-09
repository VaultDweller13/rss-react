import { render, screen, waitFor } from '@testing-library/react';

import { CardContainer } from '../components';

describe('CardContainer', () => {
  it('should render <Card> elements', async () => {
    render(<CardContainer searchQuery="" />);

    await waitFor(() => {
      expect(screen.getByText('Super Mario Odyssey')).toBeInTheDocument;
      expect(screen.getByText('The Legend of Zelda: Breath of the Wild')).toBeInTheDocument;
    });
  });
});
