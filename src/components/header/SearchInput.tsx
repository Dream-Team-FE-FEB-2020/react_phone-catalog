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
              className="search__img search__img--remove"
            >
              x
            </button>
          )
          : (
            <div className="search__img">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.66683 7.33334C2.66683 4.75601 4.75617 2.66668 7.3335 2.66668C9.91083 2.66668 12.0002 4.75601 12.0002 7.33334C12.0002 8.59061 11.503 9.73176 10.6945 10.5709C10.6716 10.5884 10.6497 10.6077 10.6287 10.6286C10.6078 10.6495 10.5886 10.6715 10.571 10.6943C9.73189 11.5028 8.59075 12 7.3335 12C4.75617 12 2.66683 9.91067 2.66683 7.33334ZM11.0786 12.0213C10.0522 12.8424 8.75016 13.3333 7.3335 13.3333C4.01979 13.3333 1.3335 10.6471 1.3335 7.33334C1.3335 4.01963 4.01979 1.33334 7.3335 1.33334C10.6472 1.33334 13.3335 4.01963 13.3335 7.33334C13.3335 8.75003 12.8425 10.052 12.0214 11.0785L14.4715 13.5286C14.7319 13.789 14.7319 14.2111 14.4715 14.4714C14.2112 14.7318 13.7891 14.7318 13.5287 14.4714L11.0786 12.0213Z" fill="#333333" />
              </svg>
            </div>
          )}
      </div>
    </section>
  );
};

export default SearchInput;
