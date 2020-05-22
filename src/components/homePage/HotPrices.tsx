import React, { useEffect, useState } from 'react';
import { getPhones } from '../api';
import './HotPrices.scss';
import ProductsSlider from './ProductsSlider';

const HotPrices = () => {
  const [preparedPhones, setPreparedPhones] = useState([]);

  const getHotPriceProducts = async () => {
    const [phonesFromServer] = await Promise.all(
      [getPhones()],
    );

    setPreparedPhones(phonesFromServer.sort((a: Phone, b: Phone) => (b.price * b.discount) - (a.price * a.discount)));
  };

  useEffect(() => {
    getHotPriceProducts();
  }, []);

  return (
    <ProductsSlider preparedPhones={preparedPhones} article="Hot Prices" />
  );
};


export default HotPrices;
