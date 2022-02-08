/**
 *
 * @param values array of tags or manufacturers (brands)
 * @param property tags or manufacturer (brands) filter
 * @returns concatenated filter by url for manufacturer (brands) or tags
 */
export const tagsBrandsReducer = (
  values: Array<string>,
  property: 'tags' | 'manufacturer'
) =>
  values.reduce((previousValue, currentValue) =>
    previousValue.concat('&', property, '=', currentValue)
  );

/**
 *
 * @param url url path for fetching data from json-server
 * @param sortValue value to determine which sorting type to use
 * @returns concatenated sorting url
 */
export const sortAscDscSwitch = (url: string, sortValue: string) => {
  switch (sortValue) {
    case 'PriceAsc':
      return url + '_sort=price&_order=asc&';
    case 'PriceDesc':
      return url + '_sort=price&_order=desc&';
    case 'DateAsc':
      return url + '_sort=added&_order=asc&';
    case 'DateDesc':
      return url + '_sort=added&_order=desc&';
    default:
      return url;
  }
};
