const url = 'https://getir-assignment-server.herokuapp.com/'; // for development set to 'http://localhost:3000/'

const clientGetRequest = (urlRequest: string, page: number) => {
  return fetch(`${url}${urlRequest}_page=${page}&_limit=16`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
};

const fetchProductItems = async (page: number) =>
  clientGetRequest('items?', page);

const sortProductItemsByPriceAsc = (page: number) =>
  clientGetRequest('items?_sort=price&_order=asc&', page);

const sortProductItemsByPriceDesc = (page: number) =>
  clientGetRequest('items?_sort=price&_order=desc&', page);

const sortProductItemsByDateAsc = (page: number) =>
  clientGetRequest('items?_sort=added&_order=asc&', page);

const sortProductItemsByDateDesc = (page: number) =>
  clientGetRequest('items?_sort=added&_order=desc&', page);

const filterByProductType = (
  page: number,
  productType: string
  // isSorted: boolean
) => clientGetRequest(`items?itemType=${productType}&`, page);

const ItemsService = {
  fetchProductItems,
  sortProductItemsByPriceAsc,
  sortProductItemsByPriceDesc,
  sortProductItemsByDateAsc,
  sortProductItemsByDateDesc,
  filterByProductType,
};

export default ItemsService;
