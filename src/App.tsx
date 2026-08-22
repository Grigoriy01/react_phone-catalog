import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './modules/HomePage/components';
import { Footer } from './shared/components/Footer';
import { Header } from './shared/components/Header/Header';
import { PhonesPage } from './modules/PhonesPage';
import { TabletsPage } from './modules/TabletsPage';
import { AccessoriesPage } from './modules/AccessoriesPage';
import { NotFoundPage } from './modules/NotFoundPage';
import { FavoritesPage } from './modules/FavoritesPage/components';
import { CartPage } from './modules/CartPage';
import './App.scss';

export const App = () => {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <h1 className="visually-hidden">Product Catalog</h1>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/phones' element={<PhonesPage />} />
          <Route path='/tablets' element={<TabletsPage />} />
          <Route path='/accessories' element={<AccessoriesPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/cart' element={<CartPage />} />

          <Route path='/home' element={<Navigate to='/' replace />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>

      </main>

      <Footer />
    </div>
  );
};
