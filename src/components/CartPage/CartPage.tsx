import { Link } from 'react-router-dom';
import './CartPage.scss';
import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../helpers/CartContext';
import CartProduct from './CartProduct';

const CartPage = () => {
  const { itemInCart } = useContext(CartContext);

  const [totalItemPrice, setTotalPrice] = useState(0);
  const [totalItemCount, setTotalItemCount] = useState(itemInCart.length);

  const summTotalPrice = (itemPrice: number, operator: string, counter: number) => {
    if (operator === "plus") {
      setTotalPrice(totalItemPrice + itemPrice);
      setTotalItemCount(totalItemCount + 1);
    }
    if (operator === "minus") {
      setTotalPrice(totalItemPrice - itemPrice);
      setTotalItemCount(totalItemCount - 1);
    }
    if (counter) {
      setTotalItemCount(totalItemCount - counter);
    }
  };

  useEffect(() => {
    if (itemInCart.length === 1) {
      setTotalPrice(itemInCart[0].price);
    } else {
      itemInCart.map(item => setTotalPrice((totalItemPrice) => totalItemPrice + item.price));
    }
  }, [itemInCart])

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
            {totalItemPrice}
          </p>
          <p className="buy-block__count">
            Total for
            {' '}
            {totalItemCount}
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
