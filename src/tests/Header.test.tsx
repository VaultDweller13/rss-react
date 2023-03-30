import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import { HeaderProps } from '../utils/types';

const props = {
  currentPage: 'Test page',
} as HeaderProps;

describe('Header', () => {
  it('should have title with current page name', () => {
    render(
      <BrowserRouter>
        <Header {...props} />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading')).toHaveTextContent('Test page');
  });
});
