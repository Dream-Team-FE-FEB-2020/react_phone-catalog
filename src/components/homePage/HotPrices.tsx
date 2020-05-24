import React, { useEffect, useState } from 'react';
import { getProducts } from '../../api';
import ProductsSlider from './ProductSlider/ProductsSlider';

const HotPrices = () => {
  const [preparedPhones, setPreparedPhones] = useState([]);

  useEffect(() => {
    getProducts()
      .then(data => setPreparedPhones(data
        .sort((a: Phone, b: Phone) => (b.price * (b.discount / 100)) - (a.price * (a.discount / 100)))));
  }, []);

  return (
    <ProductsSlider preparedPhones={preparedPhones} article="Hot Prices" />
  );
};


export default HotPrices;
