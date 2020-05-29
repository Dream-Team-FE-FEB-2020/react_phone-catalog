import React, { useState, useEffect } from 'react';
import { Link, useParams, RouteComponentProps } from 'react-router-dom';
import { getProducts } from '../../api';
import SortBy from '../../helpers/SortBy';
import ItemsOnPage from '../../helpers/ItemsOnPage';
import ProductList from '../ProductList/ProductList';
import Pagination from '../../helpers/Pagination';
import Loader from '../loader/Loader';
import ErrorPage from '../../helpers/ErrorPage';
import './ItemsPage.scss';

type Props = RouteComponentProps<{
  itemName: string;
}>;

const ItemsPage: React.FC<Props> = ({ history, location, match }) => {
  const [itemsFromServer, setItemsFromServer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [preparedItem, setPreparedItem] = useState([]);

  const [typeItem, setTypeItem] = useState('');

  const { itemName } = useParams();
  const searchParams = new URLSearchParams(location.search);
  const query: string = searchParams.get('query') || '';
  const sort: string = searchParams.get('sort') || '';
  const page: number = Number(searchParams.get('page')) || 1;
  const perPage: number = Number(searchParams.get('perPage')) || itemsFromServer.length;
  const start: number = (page - 1) * perPage;
  let pageCount = Math.ceil(itemsFromServer.length / perPage) || 1;
  const lowerQuery = query.toLowerCase();

  useEffect(() => {
    if (match.path === '/tablets') {
      setTypeItem('tablet');
    }

    if (match.path === '/phones') {
      setTypeItem('phone');
    }
  }, [match.path]);

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then(data => setItemsFromServer(data
        .filter((item: Phone) => item.type === typeItem)))
      .catch(() => errorDownload());
    setTimeout(() => setIsLoading(false), 500);
  }, [typeItem]);

  const errorDownload = () => {
    return <ErrorPage />;
  };

  useEffect(() => {
    const result = itemsFromServer
      .filter((item: Phone) => item.name
        .toLowerCase()
        .includes(lowerQuery));

    switch (sort) {
      case 'price':
        setPreparedItem(result
          .sort((a: Phone, b: Phone): number => a.price - b.price));
        break;
      case 'name':
        setPreparedItem(result
          .sort((a: Phone, b: Phone): number => a.name.localeCompare(b.name)));
        break;
      default:
        setPreparedItem(result
          .sort((a: Phone, b: Phone): number => a.age - b.age));
    }
  }, [itemsFromServer, query, sort, perPage, lowerQuery]);


  if (query !== '') {
    pageCount = Math.ceil(preparedItem.length / perPage);
  }

  const viviblePreparedItem = preparedItem.slice(start, start + perPage);

  if (itemName && !itemsFromServer.some((item: Phone) => item.name === itemName)) {
    if (typeItem === 'tablet') {
      history.push({ pathname: '/tablets' });
    }

    if (typeItem === 'phone') {
      history.push({ pathname: '/phones' });
    }
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="phones-page">
      <section className="nav-location">
        <Link to="/" className="nav-location__svg-home">
          <img src="./img/home.svg" alt="home" />
        </Link>
        <div className="nav-location__svg-arrow">
          <img src="./img/ArrowRightActive.svg" alt="arrow" />
        </div>
        <p className="nav-location__text">
          {
            (typeItem === 'phone' && 'Phones')
            || (typeItem === 'tablet' && 'Tablets')
            || (typeItem === 'accesories' && 'Accesories')
          }
        </p>
      </section>
      <section className="phones-page__article">
        <h2 className="phones-page__article-title">
          {
            (typeItem === 'phone' && 'Mobile phones')
            || (typeItem === 'tablet' && 'Tablets')
            || (typeItem === 'accesories' && 'Accesories')
          }
        </h2>
        <p className="phones-page__article-count">{query === '' ? (`${itemsFromServer.length} models`) : (`Find ${preparedItem.length} models`)}</p>
      </section>
      <section className="phones-page__sortBy">
        <SortBy />
        <ItemsOnPage countPhones={itemsFromServer.length} />
      </section>
      <ProductList preparedPhones={viviblePreparedItem} />
      <Pagination pageCount={pageCount} />
    </div>
  );
};

export default ItemsPage;
