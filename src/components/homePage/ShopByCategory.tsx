import React from 'react';
import './ShopByCategory.scss';
import { Link } from 'react-router-dom';

type Props = {
  preparedPhones: Phone[];
};

const ShopByCategory: React.FC<Props> = ({ preparedPhones }) => {
  const countPhones = preparedPhones.filter((phone: Phone) => phone.type === 'phone').length;
  const countTablets = preparedPhones.filter((phone: Phone) => phone.type === 'tablet').length;
  const countAccessories = preparedPhones.filter((phone: Phone) => phone.type === 'accessories').length;

  return (
    <section className="ShopByCategory">
      <h2 className="ShopByCategory__article">Shop by category</h2>
      <div className="ShopByCategory__cards">
        <Link to="/phones" className="ShopByCategory__card ShopByCategory__card-mobile">
          <img className="ShopByCategory__card-image" src="./img/shopBycategoryPicture/1.jpg" alt="kjhg" />
          <h3 className="ShopByCategory__card-article">Mobile phones</h3>
          <p className="ShopByCategory__card-quantity">
            {countPhones}
            {' '}
            models
          </p>
        </Link>
        <Link to="/tablets" className="ShopByCategory__card ShopByCategory__card-mobile">
          <img className="ShopByCategory__card-image" src="./img/shopBycategoryPicture/2.jpg" alt="kjhg" />
          <h3 className="ShopByCategory__card-article">Tablets</h3>
          <p className="ShopByCategory__card-quantity">
            {countTablets}
            {' '}
            models
          </p>
        </Link>
        <Link to="/accessories" className="ShopByCategory__card ShopByCategory__card-mobile">
          <img className="ShopByCategory__card-image" src="./img/shopBycategoryPicture/3.jpg" alt="kjhg" />
          <h3 className="ShopByCategory__card-article">Accessories</h3>
          <p className="ShopByCategory__card-quantity">
            {countAccessories}
            {' '}
            models
          </p>
        </Link>
      </div>
    </section>
  );
};

export default ShopByCategory;
