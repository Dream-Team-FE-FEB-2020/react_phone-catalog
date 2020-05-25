import React from 'react';
import './Header.scss';
import { Route } from 'react-router-dom';
import Logo from './Logo/Logo';
import Nav from './Nav';
import Favorite from './Favorite/Favorite';
import Cart from './Cart/Cart';
import SearchInput from './SearchInput';

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header__nav menu">
        <Logo />
        <Nav />
      </div>
      <div className="header__nav action">
        <Route path="/phones">
          <SearchInput />
        </Route>
        <Route path="/tablets">
          <SearchInput />
        </Route>
        <Route path="/accessories">
          <SearchInput />
        </Route>
        <Favorite />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
