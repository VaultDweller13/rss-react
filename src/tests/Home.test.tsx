import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from '../pages/Home';
import store from '../app/store';

describe('Home page', () => {
  it('should have title with current page name', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Switch store');
  });
});
