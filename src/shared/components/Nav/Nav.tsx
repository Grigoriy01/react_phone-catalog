import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './Nav.scss';

interface Options {
  isActive: boolean;
}

export const Nav = () => {
  const isActiveClass = ({ isActive }: Options) =>
    classNames('nav-site__link', { 'is-active': isActive });
  return (
    <nav className="nav-site" role="navigation" aria-label="main navigation">
      <ul className="nav-site__list">
        <li className="nav-site__item">
          <NavLink to="/" className={isActiveClass}>
            Home
          </NavLink>
        </li>
        <li className="nav-site__item">
          <NavLink to="/phones" className={isActiveClass}>
            Phones
          </NavLink>
        </li>
        <li className="nav-site__item">
          <NavLink to="/tablets" className={isActiveClass}>
            Tablets
          </NavLink>
        </li>
        <li className="nav-site__item">
          <NavLink to="/accessories" className={isActiveClass}>
            Accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
