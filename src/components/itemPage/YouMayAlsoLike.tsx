import React from 'react';
import ProductsSlider from '../ProductSlider/ProductsSlider';

type Props = {
  preparedPhones: Phone[];
};

const YouMayAlsoLike: React.FC<Props> = ({ preparedPhones }) => {
  const randomArray = (arr: Phone[]) => {
    let j;
    let temp;

    for (let i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }

    return arr;
  };

  const preparedPhonesToHotPricdes = randomArray(preparedPhones);

  return (
    <ProductsSlider preparedPhones={preparedPhonesToHotPricdes} article="You may also like" />
  );
};


export default YouMayAlsoLike;
