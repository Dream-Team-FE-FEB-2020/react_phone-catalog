import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDetails, getProducts } from '../../api';
import Loader from '../loader/Loader';
import './ItemPage.scss';
import YouMayAlsoLike from './YouMayAlsoLike';

type Props = {
  currentItem: string;
};

const ItemPage: React.FC<Props> = ({ currentItem }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [itemDetail, setItemDetail] = useState<ItemDetail>();
  const [currentItemInformation, setCurrentItemInformation] = useState<Phone>();
  const [preparedPhones, setPreparedPhones] = useState<Phone[]>([]);
  const [currentImg, setcurrentImg] = useState<string>();

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then(data => setCurrentItemInformation(data.find((item: Phone) => item.id === currentItem)));
    getDetails(currentItem)
      .then(setItemDetail);
    getProducts()
      .then(setPreparedPhones);
    setTimeout(() => setIsLoading(false), 500);
  }, [currentItem]);

  useEffect(() => {
    setcurrentImg(currentItemInformation && currentItemInformation.imageUrl || '');
  }, [currentItemInformation]);

  const onHandleClickImg = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLImageElement;

    setcurrentImg(target.src);
  };

  if (isLoading) {
    return <Loader />;
  }

  const priceWithDiscount = currentItemInformation && currentItemInformation.price - (currentItemInformation.price * (currentItemInformation.discount / 100));

  return (
    <div className="item-page">
      <section className="nav-location">
        <Link to="/" className="nav-location__svg-home">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.59087 0.807088C7.83161 0.619846 8.16872 0.619846 8.40946 0.807088L14.4095 5.47375C14.5718 5.60006 14.6668 5.79426 14.6668 5.99999V13.3333C14.6668 13.8638 14.4561 14.3725 14.081 14.7475C13.706 15.1226 13.1973 15.3333 12.6668 15.3333H3.3335C2.80306 15.3333 2.29436 15.1226 1.91928 14.7475C1.54421 14.3725 1.3335 13.8638 1.3335 13.3333V5.99999C1.3335 5.79426 1.42848 5.60006 1.59087 5.47375L7.59087 0.807088ZM2.66683 6.32605V13.3333C2.66683 13.5101 2.73707 13.6797 2.86209 13.8047C2.98712 13.9298 3.15669 14 3.3335 14H12.6668C12.8436 14 13.0132 13.9298 13.1382 13.8047C13.2633 13.6797 13.3335 13.5101 13.3335 13.3333V6.32605L8.00016 2.1779L2.66683 6.32605Z" fill="#313237" />
            <path fillRule="evenodd" clipRule="evenodd" d="M5.3335 8.00001C5.3335 7.63182 5.63197 7.33334 6.00016 7.33334H10.0002C10.3684 7.33334 10.6668 7.63182 10.6668 8.00001V14.6667C10.6668 15.0349 10.3684 15.3333 10.0002 15.3333C9.63197 15.3333 9.3335 15.0349 9.3335 14.6667V8.66668H6.66683V14.6667C6.66683 15.0349 6.36835 15.3333 6.00016 15.3333C5.63197 15.3333 5.3335 15.0349 5.3335 14.6667V8.00001Z" fill="#313237" />
          </svg>
        </Link>
        <div className="nav-location__svg-arrow">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.528514 5.47124C0.268165 5.21089 0.268165 4.78878 0.528514 4.52843L4.52851 0.528433C4.78886 0.268083 5.21097 0.268083 5.47132 0.528433L9.47132 4.52843C9.73167 4.78878 9.73167 5.21089 9.47132 5.47124C9.21097 5.73159 8.78886 5.73159 8.52851 5.47124L4.99992 1.94265L1.47132 5.47124C1.21097 5.73159 0.788864 5.73159 0.528514 5.47124Z" fill="#313237" />
          </svg>
        </div>
        <Link to="/phones" className="nav-location__text nav-location__text-item nav-location__text-item-link">Phones</Link>
        <div className="nav-location__svg-arrow">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.528514 5.47124C0.268165 5.21089 0.268165 4.78878 0.528514 4.52843L4.52851 0.528433C4.78886 0.268083 5.21097 0.268083 5.47132 0.528433L9.47132 4.52843C9.73167 4.78878 9.73167 5.21089 9.47132 5.47124C9.21097 5.73159 8.78886 5.73159 8.52851 5.47124L4.99992 1.94265L1.47132 5.47124C1.21097 5.73159 0.788864 5.73159 0.528514 5.47124Z" fill="#313237" />
          </svg>
        </div>
        <p className="nav-location__text nav-location__text-item">{currentItemInformation && currentItemInformation.name}</p>
      </section>
      <section className="back-link">
        <Link to="/phones" className="nav-location__back-link">
          <svg className="back-link__svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.52876 3.52861C5.78911 3.26826 6.21122 3.26826 6.47157 3.52861L10.4716 7.52861C10.7319 7.78896 10.7319 8.21107 10.4716 8.47141L6.47157 12.4714C6.21122 12.7318 5.78911 12.7318 5.52876 12.4714C5.26841 12.2111 5.26841 11.789 5.52876 11.5286L9.05735 8.00001L5.52876 4.47141C5.26841 4.21107 5.26841 3.78896 5.52876 3.52861Z" fill="black" />
          </svg>
          <p className="back-link__text">Back</p>
        </Link>
      </section>
      <section className="product-description">
        <h3 className="product-description__title">{currentItemInformation && currentItemInformation.name}</h3>
        <div className="product-description__main-block main-block">
          <div className="gallery">
            {itemDetail && itemDetail.images.map(item => (
              <img
                className="gallery__img"
                onClick={(event) => onHandleClickImg(event)}
                src={item}
                key={item}
              />
            ))}
          </div>
          <div className="main-block__img">
            <img src={currentImg} alt={currentItemInformation && currentItemInformation.name} />
          </div>
          <div className="main-block__description">
            <span className="item__price main-block__price">
              <p className="item__price-discount">{`$${priceWithDiscount}`}</p>
              <p className="item__price-value">
                {(currentItemInformation && currentItemInformation.price === priceWithDiscount)
                  ? '' : (`$${currentItemInformation && currentItemInformation.price}`)}
              </p>
            </span>
            <div className="description item__description">
              <span className="description__screen">
                <p className="item__description__screen-title">Screen</p>
                <p className="item__description__screen-value">{currentItemInformation && currentItemInformation.screen}</p>
              </span>
              <span className="description__capacity">
                <p className="description__screen-title">Capacity</p>
                <p className="description__screen-value">{currentItemInformation && currentItemInformation.capacity}</p>
              </span>
              <span className="description__ram">
                <p className="description__screen-title">ram</p>
                <p className="description__screen-value">{currentItemInformation && currentItemInformation.ram}</p>
              </span>
            </div>
            <div className="item__button">
              <input className="item__button-add-to-cart" type="button" value="Add to cart" />
              <label
          className="item__button-favorite"
          htmlFor={`button-favorite-${currentItemInformation && currentItemInformation.id}`}
        >
          <input
            className="item__button-favorite-input"
            type="checkbox"
            id={`button-favorite-${currentItemInformation && currentItemInformation.id}`}
          />
          <span className="item__button-favorite-check" />
        </label>
            </div>
          </div>
        </div>
        <div className="other-block">
          <div className="other-block__description">
            <h4 className="other-block__article">About</h4>
            <h4 className="other-block__article-description">And then there was Pro</h4>
            <p>{itemDetail && itemDetail.description}</p>
            <h4 className="other-block__article-description">Camera</h4>
            <p>{itemDetail && itemDetail.additionalFeatures}</p>
            <h4 className="other-block__article-description">Shoot it. Flip it. Zoom it. Tweak it. Love it</h4>
            <p>Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.</p>
          </div>
          <div className="other-block__specification">
            <h4 className="other-block__article">Tech specs</h4>
            <div className="description item__description">
              <span className="description__screen">
                <p className="item__description__screen-title">OS</p>
                <p className="item__description__screen-value">{itemDetail && itemDetail.android?.os}</p>
              </span>
              <span className="description__capacity">
                <p className="description__screen-title">Hardware</p>
                <p className="description__screen-value">{itemDetail && itemDetail.hardware.cpu}</p>
              </span>
              <span className="description__ram">
                <p className="description__screen-title">Ram</p>
                <p className="description__screen-value">{currentItemInformation && currentItemInformation.ram}</p>
              </span>
              <span className="description__ram">
                <p className="description__screen-title">Display</p>
                <p className="description__screen-value">{itemDetail && itemDetail.display.screenResolution}</p>
              </span>
              <span className="description__ram">
                <p className="description__screen-title">Camera Primary</p>
                <p className="description__screen-value">{itemDetail && itemDetail.camera.primary}</p>
              </span>
              <span className="description__ram">
                <p className="description__screen-title">Camera Zoom</p>
                <p className="description__screen-value">{itemDetail && (itemDetail.camera.zoom || 'Not avaible')}</p>
              </span>
              <span className="description__ram">
                <p className="description__screen-title">Battery</p>
                <p className="description__screen-value">{itemDetail && itemDetail.battery?.type}</p>
              </span>
              <span className="description__ram">
                <p className="description__screen-title">Storage</p>
                <p className="description__screen-value">{itemDetail && itemDetail.storage?.flash}</p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="item-page-slider">
        <YouMayAlsoLike preparedPhones={preparedPhones} />
      </section>
    </div>
  );
};

export default ItemPage;
