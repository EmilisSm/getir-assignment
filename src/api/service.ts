const url = 'https://getir-assignment-server.herokuapp.com/'; // for development set to 'http://localhost:3000/'

const clientGet = (urlRequest: string) => {
  let total;
  return fetch(`${url}${urlRequest}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    // taking total amount of items from response header
    total = response.headers.get('x-total-count');
    return { response: response.json(), total };
  });
};

const fetchProductItems = async (url: string, page: number) =>
  clientGet(url + `_page=${page}&_limit=16`);

const ItemsService = {
  clientGet,
  fetchProductItems,
};

export default ItemsService;
