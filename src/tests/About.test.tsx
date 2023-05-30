import About from '../pages/About';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('About', () => {
  it('should have title with current page name', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About page');
  });
});
