import React from 'react';
import './ProductsSlider.scss';
import ProductCard from './ProductCard';

type Props = {
  preparedPhones: Phone[];
  article: string;
};

const ProductsSlider: React.FC<Props> = ({ preparedPhones, article }) => {

  return (
    <section className="ProductsSlider">
      <div className="ProductsSlider__header">
        <h2 className="ProductsSlider__article">{article}</h2>
        <div className="ProductsSlider__button">
          <label
            htmlFor="nextProduct"
            className="label-nextProduct"
          />
          <button className="ProductsSlider__button-prev" id="prevProduct"/>
          <label
            htmlFor="prevProduct"
            className="label-prevProduct"
          />
          <button className="ProductsSlider__button-next" id="nextProduct" />
        </div>
      </div>
      <div className="ProductsSlider__cards">
        {preparedPhones.map((phone: Phone ) => <ProductCard phone={phone} key={phone.id} />)}
      </div>
    </section>
  );
}

export default ProductsSlider;
