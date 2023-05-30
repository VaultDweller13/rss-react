import FormPage from '../pages/FormPage';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('FormPage', () => {
  it('should have title with current page name', () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Add game');
  });
});
