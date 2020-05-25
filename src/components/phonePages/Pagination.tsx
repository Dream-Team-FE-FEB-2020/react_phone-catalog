import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Pagination.scss';
import classNames from 'classnames';

type Props = {
  pageCount: number;
};

const ProductList: React.FC<Props> = ({ pageCount }) => {
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const page: number = Number(searchParams.get('page')) || 1;

  const handleChangePage = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLButtonElement;

    searchParams.set('page', target.value);
    history.push({
      search: searchParams.toString(),
    });
  };

  const handleChangePageNext = () => {
    searchParams.set('page', `${page + 1}`);
    history.push({
      search: searchParams.toString(),
    });
  };

  const handleChangePagePrew = () => {
    searchParams.set('page', `${page - 1}`);
    history.push({
      search: searchParams.toString(),
    });
  };

  return (
    <section className="pagination">
      <button
        type="button"
        onClick={handleChangePagePrew}
        disabled={page === 1}
        className={classNames('pagination__button', 'pagination__button-left', { disabled: (page === 1) })}
      >
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.528514 5.47124C0.268165 5.21089 0.268165 4.78878 0.528514 4.52843L4.52851 0.528433C4.78886 0.268083 5.21097 0.268083 5.47132 0.528433L9.47132 4.52843C9.73167 4.78878 9.73167 5.21089 9.47132 5.47124C9.21097 5.73159 8.78886 5.73159 8.52851 5.47124L4.99992 1.94265L1.47132 5.47124C1.21097 5.73159 0.788864 5.73159 0.528514 5.47124Z" />
        </svg>
      </button>
      {Array(pageCount).fill('button').map((item, index) => (
        <input
          key={index}
          onClick={handleChangePage}
          type={item}
          className={classNames('pagination__button', 'pagination__button-page', { 'pagination__button-page-active': (index + 1) === page })}
          value={index + 1}
        />
      ))}
      <button
        type="button"
        disabled={page > (pageCount - 1)}
        onClick={handleChangePageNext}
        className={classNames('pagination__button', 'pagination__button-right', { disabled: page > (pageCount - 1) })}
      >
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.528514 5.47124C0.268165 5.21089 0.268165 4.78878 0.528514 4.52843L4.52851 0.528433C4.78886 0.268083 5.21097 0.268083 5.47132 0.528433L9.47132 4.52843C9.73167 4.78878 9.73167 5.21089 9.47132 5.47124C9.21097 5.73159 8.78886 5.73159 8.52851 5.47124L4.99992 1.94265L1.47132 5.47124C1.21097 5.73159 0.788864 5.73159 0.528514 5.47124Z" />
        </svg>
      </button>
    </section>
  );
};

export default ProductList;
