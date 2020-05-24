import React, { useEffect, useState } from 'react';
import { getProducts } from '../../api';
import ProductsSlider from './ProductSlider/ProductsSlider';

const BrandNewModels = () => {
  const [preparedPhones, setPreparedPhones] = useState([]);

  useEffect(() => {
    getProducts()
      .then(data => setPreparedPhones(data.sort((a: Phone, b: Phone) => (a.age) - (b.age))));
  }, []);

  return (
    <ProductsSlider preparedPhones={preparedPhones} article="Brand new models" />
  );
};


export default BrandNewModels;
