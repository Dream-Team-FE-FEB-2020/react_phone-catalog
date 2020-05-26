import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams, RouteComponentProps } from 'react-router-dom';
import './PhonePages.scss';
import { getProducts } from '../../api';
import SortBy from './SortBy';
import ItemsOnPage from './ItemsOnPage';
import ProductList from '../ProductList/ProductList';
import Pagination from './Pagination';
import Loader from '../loader/Loader';

type Props = RouteComponentProps<{
  phoneName: string;
}>;

const PhonePages: React.FC<Props> = ({ history, location }) => {
  const [phonesFromServer, setPhonesFromServer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [preparedPhones, setPreparedPhones] = useState([]);

  const { phoneName } = useParams();
  const searchParams = new URLSearchParams(location.search);
  const query: string = searchParams.get('query') || '';
  const sort: string = searchParams.get('sort') || '';
  const page: number = Number(searchParams.get('page')) || 1;
  const perPage: number = Number(searchParams.get('perPage')) || phonesFromServer.length;
  const pattern = new RegExp(query, 'i');
  const start: number = (page - 1) * perPage;
  let pageCount = Math.ceil(phonesFromServer.length / perPage) || 1;

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then(data => setPhonesFromServer(data
        .filter((phone: Phone) => phone.type === 'phone')));
    setTimeout(() => setIsLoading(false),500)
  }, []);

  useMemo(() => {
    setPreparedPhones(phonesFromServer
      .filter((phone: Phone) => pattern.test(phone.name))
      .sort((a: Phone, b: Phone): number => {
        switch (sort) {
          case 'price':
            return a.price - b.price;
          case 'name':
            return a.name.localeCompare(b.name);
          default:
            return a.age - b.age;
        }
      }));
  }, [phonesFromServer, query, sort, perPage]);

  if (query !== '') {
    pageCount = Math.ceil(preparedPhones.length / perPage);
  }

  const visiblePreparedPhones = preparedPhones.slice(start, start + perPage);

  if (phoneName && !phonesFromServer.some((phone: Phone) => phone.name === phoneName)) {
    history.push({ pathname: '/phones' });
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="phones-page">
      <section className="nav-location">
        <Link to="/" className="nav-location__svg--home">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.59087 0.807088C7.83161 0.619846 8.16872 0.619846 8.40946 0.807088L14.4095 5.47375C14.5718 5.60006 14.6668 5.79426 14.6668 5.99999V13.3333C14.6668 13.8638 14.4561 14.3725 14.081 14.7475C13.706 15.1226 13.1973 15.3333 12.6668 15.3333H3.3335C2.80306 15.3333 2.29436 15.1226 1.91928 14.7475C1.54421 14.3725 1.3335 13.8638 1.3335 13.3333V5.99999C1.3335 5.79426 1.42848 5.60006 1.59087 5.47375L7.59087 0.807088ZM2.66683 6.32605V13.3333C2.66683 13.5101 2.73707 13.6797 2.86209 13.8047C2.98712 13.9298 3.15669 14 3.3335 14H12.6668C12.8436 14 13.0132 13.9298 13.1382 13.8047C13.2633 13.6797 13.3335 13.5101 13.3335 13.3333V6.32605L8.00016 2.1779L2.66683 6.32605Z" fill="#313237" />
            <path fillRule="evenodd" clipRule="evenodd" d="M5.3335 8.00001C5.3335 7.63182 5.63197 7.33334 6.00016 7.33334H10.0002C10.3684 7.33334 10.6668 7.63182 10.6668 8.00001V14.6667C10.6668 15.0349 10.3684 15.3333 10.0002 15.3333C9.63197 15.3333 9.3335 15.0349 9.3335 14.6667V8.66668H6.66683V14.6667C6.66683 15.0349 6.36835 15.3333 6.00016 15.3333C5.63197 15.3333 5.3335 15.0349 5.3335 14.6667V8.00001Z" fill="#313237" />
          </svg>
        </Link>
        <div className="nav-location__svg--arrow">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.528514 5.47124C0.268165 5.21089 0.268165 4.78878 0.528514 4.52843L4.52851 0.528433C4.78886 0.268083 5.21097 0.268083 5.47132 0.528433L9.47132 4.52843C9.73167 4.78878 9.73167 5.21089 9.47132 5.47124C9.21097 5.73159 8.78886 5.73159 8.52851 5.47124L4.99992 1.94265L1.47132 5.47124C1.21097 5.73159 0.788864 5.73159 0.528514 5.47124Z" fill="#313237" />
          </svg>
        </div>
        <p className="nav-location__text">Phones</p>
      </section>
      <section className="phones-page__article">
        <h2 className="phones-page__article-title">Mobile phones</h2>
        <p className="phones-page__article-count">{query === '' ? (`${phonesFromServer.length} models`) : (`Find ${preparedPhones.length} models`)}</p>
      </section>
      <section className="phones-page__sortBy">
        <SortBy />
        <ItemsOnPage countPhones={phonesFromServer.length} />
      </section>
      <ProductList preparedPhones={visiblePreparedPhones} />
      <Pagination pageCount={pageCount} />
    </div>
  );
};

export default PhonePages;
