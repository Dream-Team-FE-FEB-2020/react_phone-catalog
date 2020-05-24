import React from 'react';
import './Header.scss';
import Logo from './Logo/Logo';
import Nav from './Nav';
import Favorite from './Favorite/Favorite';
import Cart from './Cart/Cart';

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header__nav menu">
        <Logo />
        <Nav />
      </div>
      <div className="header__nav action">
        <Favorite />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
