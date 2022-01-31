const url = 'https://getir-assignment-server.herokuapp.com/'; // for development set to 'http://localhost:3000/'

const fetchProductItems = async (page: number) => {
  return fetch(`${url}items?_page=${page}&_limit=16`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
};

const sortProductItemsByPriceAsc = (page: number) => {
  return fetch(`${url}items?_sort=price&_order=asc&_page=${page}&_limit=16`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
};

const sortProductItemsByPriceDesc = (page: number) => {
  return fetch(`${url}items?_sort=price&_order=desc&_page=${page}&_limit=16`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
};

const sortProductItemsByDateAsc = (page: number) => {
  return fetch(`${url}items?_sort=added&_order=asc&_page=${page}&_limit=16`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
};

const sortProductItemsByDateDesc = (page: number) => {
  return fetch(`${url}items?_sort=added&_order=desc&_page=${page}&_limit=16`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
};

const ItemsService = {
  fetchProductItems,
  sortProductItemsByPriceAsc,
  sortProductItemsByPriceDesc,
  sortProductItemsByDateAsc,
  sortProductItemsByDateDesc,
};

export default ItemsService;
