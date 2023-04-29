import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { configureStore } from '@reduxjs/toolkit';
import { type Response } from 'express';
import { Provider } from 'react-redux';
import Html from './components/html/Html';
import App from './app/App';
import { searchReducer, gameDataReducer, formReducer } from './components';
import { getRawGamesData } from '../src/services/api';

export async function render(url: URL, response: Response) {
  console.log(url);

  const store = configureStore({
    reducer: {
      search: searchReducer,
      gameData: gameDataReducer,
      userCards: formReducer,
    },
    preloadedState: {
      search: '',
      gameData: {
        fetchedGames: (await getRawGamesData()).data,
        fetchedById: null,
        status: 'idle',
        error: '',
      },
    },
  });

  let didError = false;
  const { pipe } = renderToPipeableStream(
    <Html title="SSR">
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </Html>,
    {
      onShellReady() {
        response.statusCode = didError ? 500 : 200;
        response.setHeader('Content-type', 'text/html');
        pipe(response);
      },
      onError(x) {
        didError = true;
        console.error(x);
      },
    }
  );
}
