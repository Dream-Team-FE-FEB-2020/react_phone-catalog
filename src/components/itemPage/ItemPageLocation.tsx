import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  currentItemTitle?: string;
  type?: string;
};

const ItemPageLocation: React.FC<Props> = ({ currentItemTitle, type }) => {
  const [itemType, setItemType] = useState('');

  useEffect(() => {
    if (type === 'phone') {
      setItemType('phones');
    }

    if (type === 'tablet') {
      setItemType('tablets');
    }

    if (type === 'accessories') {
      setItemType('accessories');
    }
  }, []);

  return (
    <>
      <section className="nav-location">
        <Link to="/" className="nav-location__svg-home">
          <img src="./img/home.svg" alt="home" />
        </Link>
        <div className="nav-location__svg-arrow">
          <img src="./img/ArrowRightActive.svg" alt="arrow" />
        </div>
        <Link to={`/${itemType}`} className="nav-location__text nav-location__text-item nav-location__text-item-link">{itemType}</Link>
        <div className="nav-location__svg-arrow">
          <img src="./img/ArrowRightActive.svg" alt="arrow" />
        </div>
        <p className="nav-location__text nav-location__text-item nav-location__text-item-link">{currentItemTitle}</p>
      </section>
      <section className="back-link">
        <Link to={`/${itemType}`} className="nav-location__back-link">
          <img src="./img/ArrowRightActive.svg" alt="arrow" className="back-link-arrow" />
          <p className="back-link__text">Back</p>
        </Link>
      </section>
    </>
  );
};


export default ItemPageLocation;
