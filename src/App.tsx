import './App.scss';
import { Footer } from './shared/components/Footer';
import { Header } from './shared/components/Header/Header';

export const App = () => {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <div className="container">
          {/* Page content / Router Outlet */}
          Page content / Router Outlet
        </div>
      </main>

      <Footer />
    </div>
  );
};
