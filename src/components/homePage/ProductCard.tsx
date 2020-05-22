import React from 'react';

type Props = {
  phone: Phone;
};

const ProductCard: React.FC<Props> = ({ phone }) => {
  return (
    <>
      <h3>{phone.name}</h3>
      <img src={phone.imageUrl}></img>
    </>
  );
};

export default ProductCard;
