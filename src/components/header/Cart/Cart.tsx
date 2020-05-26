import React from 'react';
import { NavLink } from 'react-router-dom';
import './Cart.scss';

const Cart = () => {
  return (
    <NavLink
      to="/cart"
      className="cart-link"
    >
      <img src="./img/ShoppingBag.svg" alt="ShoppingBag"></img>
    </NavLink>
  );
};

export default Cart;
