import React, { useEffect, useState } from 'react';
import { getPhones } from '../../api';
import ProductsSlider from './ProductSlider/ProductsSlider';

const BrandNewModels = () => {
  const [preparedPhones, setPreparedPhones] = useState([]);

  const getHotPriceProducts = async () => {
    const [phonesFromServer] = await Promise.all(
      [getPhones()],
    );

    setPreparedPhones(phonesFromServer.sort((a: Phone, b: Phone) => (a.age) - (b.age)));
  };

  useEffect(() => {
    getHotPriceProducts();
  }, []);

  return (
    <ProductsSlider preparedPhones={preparedPhones} article="Brand new models" />
  );
};


export default BrandNewModels;
