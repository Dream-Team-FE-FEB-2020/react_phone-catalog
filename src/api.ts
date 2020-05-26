
export const getPhones = () => {
  return fetch('https://mate-academy.github.io/react_phone-catalog/api/products.json')
    .then(response => response.json());
};

export const getProducts = async () => {
  const [phonesFromServer] = await Promise.all(
    [getPhones()],
  );

  return phonesFromServer;
};
