import React, { useEffect, useState } from 'react';
import { getPhones } from '../../api';
import ProductsSlider from './ProductSlider/ProductsSlider';

const HotPrices = () => {
  const [preparedPhones, setPreparedPhones] = useState([]);

  const getHotPriceProducts = async () => {
    const [phonesFromServer] = await Promise.all(
      [getPhones()],
    );

    setPreparedPhones(phonesFromServer
      .sort((a: Phone, b: Phone) => (b.price * (b.discount / 100)) - (a.price * (a.discount / 100))));
  };

  useEffect(() => {
    getHotPriceProducts();
  }, []);

  return (
    <ProductsSlider preparedPhones={preparedPhones} article="Hot Prices" />
  );
};


export default HotPrices;
