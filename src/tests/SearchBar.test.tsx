import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { SearchBar } from '../components';
import store from '../app/store';

describe('Search bar', () => {
  it('should have search input', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    expect(screen.getByRole('searchbox')).toBeInTheDocument;
  });

  it('should have button', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    expect(screen.getByRole('button')).toBeInTheDocument;
  });
});
