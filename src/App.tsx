import './App.scss';
import { HomePage } from './modules/HomePage/components';
import { Footer } from './shared/components/Footer';
import { Header } from './shared/components/Header/Header';

export const App = () => {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <h1 className="visually-hidden">Product Catalog</h1>

        <HomePage />
      </main>

      <Footer />
    </div>
  );
};
