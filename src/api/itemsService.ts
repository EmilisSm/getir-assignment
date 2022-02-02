const url = 'https://getir-assignment-server.herokuapp.com/'; // for development set to 'http://localhost:3000/'

const clientGetRequest = (urlRequest: string) => {
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
  clientGetRequest(url + `_page=${page}&_limit=16`);

const ItemsService = {
  clientGetRequest,
  fetchProductItems,
};

export default ItemsService;
