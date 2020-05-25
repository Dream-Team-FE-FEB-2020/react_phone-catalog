import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './SortBy.scss';

const SortBy = () => {
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const sort: string = searchParams.get('sort') || 'age';

  return (
    <label className="select-for-sort">
      <span className="select-for-sort__text">Sort by</span>
      <svg className="select-for-sort__svg" width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.528514 5.47124C0.268165 5.21089 0.268165 4.78878 0.528514 4.52843L4.52851 0.528433C4.78886 0.268083 5.21097 0.268083 5.47132 0.528433L9.47132 4.52843C9.73167 4.78878 9.73167 5.21089 9.47132 5.47124C9.21097 5.73159 8.78886 5.73159 8.52851 5.47124L4.99992 1.94265L1.47132 5.47124C1.21097 5.73159 0.788864 5.73159 0.528514 5.47124Z" />
      </svg>
      <select
        className="select-for-sort__options"
        value={sort}
        onChange={(event) => {
          const target = event.target as HTMLSelectElement;

          searchParams.set('sort', target.value);
          history.push({
            search: searchParams.toString(),
          });
        }}
      >
        <option value="age">Newest</option>
        <option value="name">A-Z</option>
        <option value="price">Price</option>
      </select>
    </label>
  );
};

export default SortBy;
