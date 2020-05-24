import React from 'react';
import BigSlider from './BigSlider/BigSlider';
import HotPrices from './HotPrices';
import BrandNewModels from './BrandNewModels';
import ShopByCategory from './ShopByCategory';

const HomePage = () => {
  return (
    <section>
      <BigSlider />
      <HotPrices />
      <ShopByCategory />
      <BrandNewModels />
    </section>
  );
};

export default HomePage;
