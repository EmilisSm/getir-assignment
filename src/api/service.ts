const client = {
  get: (urlRequest: string) => {
    let total;
    return fetch(
      `https://getir-assignment-server.herokuapp.com/${urlRequest}`, // for development set to 'http://localhost:3000/'
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((response) => {
      // taking total amount of items from response header
      total = response.headers.get('x-total-count');
      return { response: response.json(), total };
    });
  },
};

interface fetchProductArguments {
  page: number;
  sortValue?: string;
  filterType?: string;
}

// with pagination
const fetchProductItems = async (args: fetchProductArguments) => {
  const { page, sortValue, filterType } = args;
  let url = 'items?';
  if (sortValue) {
    switch (sortValue) {
      case 'PriceAsc':
        url = url + '_sort=price&_order=asc&';
        break;
      case 'PriceDesc':
        url = url + '_sort=price&_order=desc&';
        break;
      case 'DateAsc':
        url = url + '_sort=added&_order=asc&';
        break;
      case 'DateDesc':
        url = url + '_sort=added&_order=desc&';
        break;
      default:
        break;
    }
  }
  if (filterType) {
    url = url + `itemType=${filterType}&`;
  }
  return client.get(url + `_page=${page}&_limit=16`);
};

const fetchCompanies = async () => (await client.get('companies?')).response;

const fetchAllProducts = async () => (await client.get('items?')).response;

const ItemsService = {
  client,
  fetchProductItems,
  fetchCompanies,
  fetchAllProducts,
};

export default ItemsService;
