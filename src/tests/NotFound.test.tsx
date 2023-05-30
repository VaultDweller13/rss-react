import NotFound from '../pages/NotFound';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('NotFound page', () => {
  it('should have title with current page name', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('404');
  });
});
