import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  currentItemTitle?: string;
};

const ItemPageLocation: React.FC<Props> = ({ currentItemTitle }) => {
  return (
    <section className="nav-location">
      <Link to="/" className="nav-location__svg-home">
        <img src="./img/home.svg" alt="home" />
      </Link>
      <div className="nav-location__svg-arrow">
        <img src="./img/ArrowRightActive.svg" alt="arrow" />
      </div>
      <Link to="/phones" className="nav-location__text nav-location__text-item nav-location__text-item-link">Phones</Link>
      <div className="nav-location__svg-arrow">
        <img src="./img/ArrowRightActive.svg" alt="arrow" />
      </div>
      <p className="nav-location__text nav-location__text-item nav-location__text-item-link">{currentItemTitle}</p>
    </section>
  );
};


export default ItemPageLocation;
