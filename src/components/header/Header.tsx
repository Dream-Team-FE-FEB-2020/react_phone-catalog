import React from 'react';
import './Header.scss';
import Logo from './Logo';
import Nav from './Nav';
import Favorite from './Favorite';
import Cart from './Cart';

const Header = () => {
  return (
    <header className="header">
      <div className="header__nav menu">
        <Logo />
        <Nav />
      </div>
      <div className="header__nav cart">
        <Favorite />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
