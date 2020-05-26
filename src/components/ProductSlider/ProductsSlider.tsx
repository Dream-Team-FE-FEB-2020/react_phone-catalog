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
            {itemIndex === 0
            ?
            <img src="./img/ArrowRight.svg" alt="arrow" className="pagination__arrow"></img>
            :
            <img src="./img/ArrowRightActive.svg" alt="arrow" className="pagination__arrow"></img>
            }
          </button>
          <button
            type="button"
            className={classNames('ProductsSlider__button-next', { disabled: itemIndex === preparedPhones.length - 4 })}
            id="nextProduct"
            onClick={moveToNext}
          >
            {itemIndex === preparedPhones.length - 4
            ?
            <img src="./img/ArrowRight.svg" alt="arrow"></img>
            :
            <img src="./img/ArrowRightActive.svg" alt="arrow"></img>
            }
          </button>
        </div>
      </div>
      <div className="ProductsSlider__cards">
        <div
          className="carousel-small"
          style={{ width: `${288 * 4}px` }}
        >
          <ul
            className="carousel-small__list"
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
