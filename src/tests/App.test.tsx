import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { fetchGamesData } from '../components/cardContainer/gameDataSlice';

import store from '../app/store';

import App from '../app/App';

const query = store.getState().search;

store.dispatch(fetchGamesData({ query }));

describe('App', () => {
  it('should render <Card> elements', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(await screen.findByText('Fire Emblem: Three Houses')).toBeInTheDocument;
    expect(await screen.findByText('The Legend of Zelda: Breath of the Wild')).toBeInTheDocument;
  });
});

describe('App', () => {
  it('should render modal window on card click', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const card = await screen.findByText('Fire Emblem: Three Houses');

    fireEvent.click(card);
    const modal = await screen.findByText(
      'Fire Emblem: Three Houses is a RPG-strategy game developed by Koei Tecmo and Intelligent Systems.'
    );

    expect(modal).toBeInTheDocument;
  });
});

describe('Modal', () => {
  it('should close, when "x" icon pressed', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const card = await screen.findByText('Fire Emblem: Three Houses');
    fireEvent.click(card);

    const modal = await screen.findByTestId('modal');
    const closeButton = screen.getByAltText('Close modal button');

    fireEvent.click(closeButton);

    expect(modal).not.toHaveClass('active');
  });
});
