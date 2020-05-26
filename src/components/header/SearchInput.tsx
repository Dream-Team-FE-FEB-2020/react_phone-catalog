import React from 'react';
import './SearchInput.scss';
import { useHistory, useLocation } from 'react-router-dom';

const SearchInput = () => {
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const query: string = searchParams.get('query') || '';

  const onHandleChange = () => {
    history.push({
      search: '?query=',
    });
  };

  return (
    <section className="search-section">
      <div className="search">
        <input
          placeholder="Search in phones..."
          className="search__input"
          type="text"
          value={query}
          onChange={(event) => {
            history.push({
              search: `?query=${event.target.value}`,
            });
          }}
        />
        {query
          ? (
            <button
              type="button"
              onClick={onHandleChange}
              className="search__img search__img-remove"
            >
              <img src="./img/close.svg" alt="close" className="search__img-remove-close"></img>
            </button>
          )
          : (
            <div className="search__img">
              <img src="./img/Search.svg" alt="search"></img>
            </div>
          )}
      </div>
    </section>
  );
};

export default SearchInput;
