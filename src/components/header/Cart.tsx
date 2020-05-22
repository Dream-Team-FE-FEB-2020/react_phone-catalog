import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.scss';

const Cart = () => {
  return (
    <Link to="/cart" className="cart-link">cart</Link>
  );
};

export default Cart;
