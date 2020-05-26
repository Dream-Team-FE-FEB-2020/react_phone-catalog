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
      >{(page === 1)
        ?
        <img src="./img/ArrowRight.svg" alt="arrow" className="pagination__arrow"></img>
        :
        <img src="./img/ArrowRightActive.svg" alt="arrow" className="pagination__arrow"></img>
      }
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
        {(page > (pageCount - 1))
        ?
        <img src="./img/ArrowRight.svg" alt="next"></img>
        :
        <img src="./img/ArrowRightActive.svg" alt="next"></img>
      }
      </button>
    </section>
  );
};

export default ProductList;
