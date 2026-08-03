
import './App.scss';
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

      <footer className="footer">
        <div className="container">
          {/* Footer content */}
          Footer content
        </div>
      </footer>
    </div>
  );
};
