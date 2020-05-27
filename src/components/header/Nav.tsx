import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="nav">
      <li className="nav__item">
        <NavLink className="nav__link" to="/" exact>home</NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to="/phones">phones</NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to="/tablets">tablets</NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to="/accessories">accessories</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
