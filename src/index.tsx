import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';

import './styles/index.scss';
import { FavoritesProvider } from './shared/context/FavoriteContext';

const container = document.getElementById('root') as HTMLDivElement;
createRoot(container).render(
  <Router>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </Router>,
);
