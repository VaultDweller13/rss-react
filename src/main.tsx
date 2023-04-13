import ReactDOM from 'react-dom/client';
import store from './app/store';
import { Provider } from 'react-redux';

import App from './app/App';
import './index.css';

const root = document.getElementById('root');
if (root)
  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
