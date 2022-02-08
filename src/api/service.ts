import { tagsBrandsReducer, sortAscDscSwitch } from '../utils';

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
  filterType: 'mug' | 'shirt' | '';
  tags: Array<string> | [];
  brands: Array<string> | [];
}

/**
 *
 * @param args arguments for fetching product items
 * @returns sorted, filtered by itemType, tags & brands products with pagination
 */
const fetchProductItems = async (args: fetchProductArguments) => {
  const { page, sortValue, filterType, tags, brands } = args;
  let url = 'items?';
  if (sortValue) {
    url = sortAscDscSwitch(url, sortValue);
  }
  if (filterType) {
    url = url + `itemType=${filterType}&`;
  }
  if (tags.length > 0) {
    url = url + `tags=${tagsBrandsReducer(tags, 'tags')}&`;
  }
  if (brands.length > 0) {
    url = url + `manufacturer=${tagsBrandsReducer(brands, 'manufacturer')}&`;
  }
  return await client.get(url + `_page=${page}&_limit=16`);
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
