import React, { useState, useEffect } from 'react';
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
  const start: number = (page - 1) * perPage;
  let pageCount = Math.ceil(phonesFromServer.length / perPage) || 1;
  const lowerQuery = query.toLowerCase();

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then(data => setPhonesFromServer(data
        .filter((phone: Phone) => phone.type === 'phone')));
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  useEffect(() => {
    const result = phonesFromServer.filter((phone: Phone) => phone.name.toLowerCase().includes(lowerQuery));

    switch (sort) {
      case 'price':
        setPreparedPhones(result.sort((a: Phone, b: Phone): number => a.price - b.price));
        break;
      case 'name':
        setPreparedPhones(result.sort((a: Phone, b: Phone): number => a.name.localeCompare(b.name)));
        break;
      default:
        setPreparedPhones(result.sort((a: Phone, b: Phone): number => a.age - b.age));
    }
  }, [phonesFromServer, query, sort, perPage, lowerQuery]);


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
        <Link to="/" className="nav-location__svg-home">
          <img src="./img/home.svg" alt="home"></img>
        </Link>
        <div className="nav-location__svg-arrow">
          <img src="./img/ArrowRightActive.svg"alt="arrow"></img>
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
