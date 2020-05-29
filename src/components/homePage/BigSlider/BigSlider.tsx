import React, { useState } from 'react';
import './BigSlider.scss';
import classNames from 'classnames';

const BigSlider = () => {
  const images = [
    './img/sliderPicture/1.jpg',
    './img/sliderPicture/2.jpg',
    './img/sliderPicture/3.jpg',
    './img/sliderPicture/4.jpg',
  ];

  const [itemIndex, setItemIndex] = useState(0);


  const moveToPrev = () => {
    if (itemIndex === 0) {
      setItemIndex(images.length - 1);
    } else {
      setItemIndex(itemIndex - 1);
    }
  };

  const moveToNext = () => {
    if (images.length - 1 === itemIndex) {
      setItemIndex(0);
    } else {
      setItemIndex(itemIndex + 1);
    }
  };

  return (
    <section className="carousel">
      <button
        id="prev"
        className="prev-button"
        onClick={moveToPrev}
        type="button"
      >
        <img src="./img/ArrowRightActive.svg" alt="arrow" className="pagination__arrow" />
      </button>
      <div
        className="carousel__block"
        style={{ width: 1040 }}
      >
        <ul
          className="carousel__list"
          style={{
            transform: `translateX(-${itemIndex * 1040}px)`,
            transition: 'transform 500ms',
          }}
        >
          {images.map((image) => (
            <li
              key={image}
            >
              <img src={image} alt="images" />
            </li>
          ))}
        </ul>
      </div>
      <button
        id="next"
        className="next-button"
        type="button"
        onClick={moveToNext}
      >
        <img src="./img/ArrowRightActive.svg" alt="arrow" />
      </button>
      <div className="slider-points">
        {images.map(image => (
          <div
            className={classNames('slider-point', { 'avtive-point': images[itemIndex] === image })}
            key={image}
          />
        ))}
      </div>
    </section>
  );
};

export default BigSlider;
