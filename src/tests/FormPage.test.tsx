import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import FormPage from '../pages/FormPage';
import store from '../app/store';

describe('FormPage', () => {
  it('should have title with current page name', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormPage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Add game');
  });
});
