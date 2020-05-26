import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

type Props = {
  phone: Phone;
};

const ProductCard: React.FC<Props> = ({ phone }) => {
  const {
    price, ram, imageUrl, discount, name, screen, capacity, id,
  } = phone;
  const priceWithDiscount = price - (price * (discount / 100));

  return (
    <div className="item">
      <div className="item__picture">
        <img className="item__img" src={imageUrl} alt="picture" />
      </div>
      <Link to={`/phones/${id}`} className="item__title">
        {name}
      </Link>
      <span className="item__price">
        <p className="item__price-discount">{`$${priceWithDiscount}`}</p>
        <p className="item__price-value">
          {(price === priceWithDiscount)
            ? '' : (`$${price}`)}
        </p>
      </span>
      <div className="description item__description">
        <span className="description__screen">
          <p className="item__description__screen-title">Screen</p>
          <p className="item__description__screen-value">{screen}</p>
        </span>
        <span className="description__capacity">
          <p className="description__screen-title">Capacity</p>
          <p className="description__screen-value">{capacity}</p>
        </span>
        <span className="description__ram">
          <p className="description__screen-title">ram</p>
          <p className="description__screen-value">{ram}</p>
        </span>
      </div>
      <div className="item__button">
        <input className="item__button-add-to-cart" type="button" value="Add to cart" />
        <label
          className="item__button-favorite"
          htmlFor={`button-favorite-${id}`}
        >
          <input
            className="item__button-favorite-input"
            type="checkbox"
            id={`button-favorite-${id}`}
          />
          <span className="item__button-favorite-check" />
        </label>
      </div>
    </div>
  );
};

export default ProductCard;
