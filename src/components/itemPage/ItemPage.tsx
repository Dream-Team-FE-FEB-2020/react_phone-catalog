import React, { useEffect, useState } from 'react';
import { getDetailsAPI } from '../../api';
import Loader from '../loader/Loader';

type Props = {
  currentItem: string,
}

const ItemPage: React.FC<Props> = ({ currentItem }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [itemDetail, setItemDetail] = useState<any>({});

  useEffect(() => {
    setIsLoading(true);
    getDetailsAPI(currentItem)
      .then(setItemDetail);
    setTimeout(() => setIsLoading(false),500)
  }, []);

  console.log(itemDetail);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
    <h1>ItemPage</h1>
    <h2>{itemDetail.additionalFeatures}</h2>
    </>
  );
};

export default ItemPage;
