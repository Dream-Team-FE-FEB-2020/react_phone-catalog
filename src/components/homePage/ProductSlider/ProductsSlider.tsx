import React, { useState } from 'react';
import './ProductsSlider.scss';
import classNames from 'classnames';
import ProductCard from '../ProductCard/ProductCard';

type Props = {
  preparedPhones: Phone[];
  article: string;
};

const ProductsSlider: React.FC<Props> = ({ preparedPhones, article }) => {
  const [itemIndex, setItemIndex] = useState(0);

  const moveToNext = () => {
    if (itemIndex !== preparedPhones.length - 4) {
      setItemIndex(itemIndex + 1);
    }
  };

  const moveToPrev = () => {
    if (itemIndex !== 0) {
      setItemIndex(itemIndex - 1);
    }
  };

  return (
    <section className="ProductsSlider">
      <div className="ProductsSlider__header">
        <h2 className="ProductsSlider__article">{article}</h2>
        <div className="ProductsSlider__button">
          <button
            type="button"
            className={classNames('ProductsSlider__button-prev', { disabled: itemIndex === 0 })}
            id="prevProduct"
            onClick={moveToPrev}
          >
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.47136 0.528606C5.21101 0.268256 4.7889 0.268256 4.52855 0.528606L0.528555 4.52861C0.268205 4.78896 0.268205 5.21107 0.528555 5.47141L4.52855 9.47141C4.7889 9.73176 5.21101 9.73176 5.47136 9.47141C5.73171 9.21107 5.73171 8.78896 5.47136 8.52861L1.94277 5.00001L5.47136 1.47141C5.73171 1.21107 5.73171 0.788955 5.47136 0.528606Z" fill={itemIndex === 0 ? '#b4bdc4' : '#313237'} />
            </svg>
          </button>
          <button
            type="button"
            className={classNames('ProductsSlider__button-next', { disabled: itemIndex === preparedPhones.length - 4 })}
            id="nextProduct"
            onClick={moveToNext}
          >
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.528636 0.528606C0.788986 0.268256 1.2111 0.268256 1.47145 0.528606L5.47145 4.52861C5.73179 4.78896 5.73179 5.21107 5.47145 5.47141L1.47145 9.47141C1.2111 9.73176 0.788986 9.73176 0.528636 9.47141C0.268287 9.21107 0.268287 8.78896 0.528636 8.52861L4.05723 5.00001L0.528636 1.47141C0.268287 1.21107 0.268287 0.788955 0.528636 0.528606Z" fill={itemIndex === preparedPhones.length - 4 ? '#b4bdc4' : '#313237'} />
            </svg>
          </button>
        </div>
      </div>
      <div className="ProductsSlider__cards">
        <div
          className="carousel--small"
          style={{ width: `${288 * 4}px` }}
        >
          <ul
            className="carousel--small__list"
            style={{
              transform: `translateX(-${itemIndex * 288}px)`,
              transition: `transform ${500}ms`,
            }}
          >
            {preparedPhones.map((phone: Phone) => (
              <li key={phone.id}>
                <ProductCard phone={phone} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductsSlider;
