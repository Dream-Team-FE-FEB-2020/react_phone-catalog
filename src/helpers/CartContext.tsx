import React, { useState } from 'react';

type CartContextType = {
  itemInCart: Phone[] ;
  addToCart: (item: Phone) => void;
  removeFromCart: (item: Phone) => void;
  isAddedToCart: (item: Phone) => boolean;
};

export const CartContext = React.createContext<CartContextType>({
  itemInCart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  isAddedToCart: () => false,
});

export const CartContextWrapper: React.FC = ({ children }) => {
  const [itemInCart, setItemInCart] = useState<Phone[]>([]);

  const addToCart = (item: Phone) => {
    setItemInCart([...itemInCart, item]);
  };

  const removeFromCart = (item: Phone) => {
    setItemInCart(itemInCart.filter(p => p.id !== item.id));
  };

  const isAddedToCart = (item: Phone) => {
    return itemInCart.some(cartItem => cartItem.id === item.id);
  };

  return (
    <CartContext.Provider value={{
      itemInCart, addToCart, removeFromCart, isAddedToCart,
    }}
    >
      {children}
    </CartContext.Provider>
  );
};
