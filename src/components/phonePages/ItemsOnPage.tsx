import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './ItemsOnPage.scss';

type Props = {
  countPhones: number;
};

const ItemsOnPage: React.FC<Props> = ({ countPhones }) => {
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const perPage: number = Number(searchParams.get('perPage')) || countPhones;

  return (
    <label className="select-for-page">
      <span className="select-for-page__text">Items on page</span>
      <svg className="select-for-page__svg" width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.528514 5.47124C0.268165 5.21089 0.268165 4.78878 0.528514 4.52843L4.52851 0.528433C4.78886 0.268083 5.21097 0.268083 5.47132 0.528433L9.47132 4.52843C9.73167 4.78878 9.73167 5.21089 9.47132 5.47124C9.21097 5.73159 8.78886 5.73159 8.52851 5.47124L4.99992 1.94265L1.47132 5.47124C1.21097 5.73159 0.788864 5.73159 0.528514 5.47124Z" />
      </svg>
      <select
        className="select-for-page__option"
        value={perPage}
        onChange={(event) => {
          const target = event.target as HTMLSelectElement;

          searchParams.set('perPage', target.value);
          history.push({
            search: searchParams.toString(),
          });
          if (countPhones === Number(target.value)) {
            searchParams.set('page', '1');
            history.push({
              search: searchParams.toString(),
            });
          }
        }}
      >
        <option value={countPhones}>All</option>
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={16}>16</option>
      </select>
    </label>
  );
};

export default ItemsOnPage;
