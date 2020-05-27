import { Link } from 'react-router-dom';
import './CartPage.scss';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../helpers/CartContext';
import CartProduct from './CartProduct';

const CartPage = () => {
  const { itemInCart } = useContext(CartContext);

  const [totalItemPrice, setTotalPrice] = useState(0);

  const summTotalPrice = (sum: number) => {
    setTotalPrice(totalItemPrice + sum);
  };

  return (
    <div className="cart-page">
      <section className="back-link">
        <Link to="/" className="nav-location__back-link">
          <img src="./img/ArrowRightActive.svg" alt="arrow" className="back-link-arrow" />
          <p className="back-link__text">Back</p>
        </Link>
      </section>
      <section className="phones-page__article mt">
        <h2 className="phones-page__article-title">Cart</h2>
      </section>
      <section className="cart-page__list">
        <ul className="cart-page__cards">
          {itemInCart.map((item) => (
            <li key={item.id}>
              <CartProduct item={item} summTotalPrice={summTotalPrice} />
            </li>
          ))}
        </ul>
        <div className="cart-page__buy-block buy-block">
          <p className="buy-block__price">
            $
            {itemInCart.length > 1 ? totalItemPrice : 0}
          </p>
          <p className="buy-block__count">
            Total for
            {itemInCart.length}
            {' '}
            items
          </p>
          <span className="buy-block__line" />
          <button type="button" className="buy-block__button">Checkout</button>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
