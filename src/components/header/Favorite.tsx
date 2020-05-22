import React from 'react';
import { Link } from 'react-router-dom';
import './Favorite.scss';

const Favorite = () => {
  return (
    <Link to="/favorite" className="favorite-link">favorite</Link>
  );
};

export default Favorite;
