import React, { useState, useEffect, useContext } from 'react';
import './CartProduct.scss';
import { CartContext } from '../../helpers/CartContext';

type Props = {
  item: Phone;
  summTotalPrice: Function;
};

const CartProduct: React.FC<Props> = ({ item, summTotalPrice }) => {
  const { removeFromCart, isAddedToCart } = useContext(CartContext);


  const [counter, setCounter] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const counterPlus = () => {
    setCounter(counter + 1);
    summTotalPrice(item.price, "plus");
  };

  const counterMinus = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      summTotalPrice(item.price, "minus");
    }
  };

  useEffect(() => {
    setTotalPrice(counter * item.price)
  }, [counter, item.price])

  useEffect(() => {
    return (
      () => {
        summTotalPrice(totalPrice, "minus", counter);
      }
    )
  }, [])

  return (
    <div className="cart-page__card">
      <button
        onClick={() => {
          if (isAddedToCart(item)) {
            removeFromCart(item);
          }
        }}
        type="button"
        className="cart-page__button-delete"
      >
        <img src="./img/closeNoActive.svg" alt="item galery" />
      </button>
      <img className="cart-page__image" src={item.imageUrl} alt="item" />
      <p className="cart-page__text">{item.name}</p>
      <button type="button" onClick={counterPlus} className="cart-page__plus">+</button>
      <p className="cart-page__counter">{counter}</p>
      <button type="button" onClick={counterMinus} className="cart-page__minus">-</button>
      <p className="cart-page__price">
        $
        {totalPrice}
      </p>
    </div>
  );
};

export default CartProduct;
