import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { FavoritesProvider } from './shared/context/FavoriteContext';
import { CartProvider } from './shared/context/CartContext';

import { App } from './App';

import './styles/index.scss';

const container = document.getElementById('root') as HTMLDivElement;
createRoot(container).render(
  <Router>
    <FavoritesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FavoritesProvider>
  </Router>,
);
