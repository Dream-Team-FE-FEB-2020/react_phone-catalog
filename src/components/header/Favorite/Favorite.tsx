import React from 'react';
import { NavLink } from 'react-router-dom';
import './Favorite.scss';

const Favorite = () => {
  return (
    <NavLink
      to="/favorite"
      className="favorite-link"
    >
      <img src="./img/favorite.svg" alt="favorite"></img>
    </NavLink>
  );
};

export default Favorite;
