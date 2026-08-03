import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav';
import { HaederActions } from './components/HaederActions';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      {/* Header content */}
      <div className="container header__container">
        <Logo />
        <Nav />

        <HaederActions />
      </div>

    </header>
  );
};
