import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.scss';

const CartPage = () => {

  return (
    <section className="cart-page">
      <div className="back-link">
        <Link to="/home" className="nav-location__back-link">
          <img src="./img/ArrowRightActive.svg" alt="arrow" className="back-link-arrow"></img>
          <p className="back-link__text">Back</p>
        </Link>
      </div>
    <section className="phones-page__article mt">
      <h2 className="phones-page__article-title">Cart</h2>
    </section>
    </section>
  );
};

export default CartPage;
