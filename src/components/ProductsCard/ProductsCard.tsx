import { useEffect } from 'react';

import ProductItem from '../../api/types/ProductItem';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  fetchProducts,
  setPage,
  filterProductsByType,
} from '../../store/slices/ProductsSlice';
import {
  ProductCardWrapper,
  PaginationWrapper,
  ProductsHeading,
  ProductTypeButton,
} from './ProductCard.styled';
import { SingleProduct } from './SingleProduct';

interface ProductsCardProps {
  products?: Array<ProductItem>;
}

export const ProductsCard: React.FC<ProductsCardProps> = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.products.page);
  const items = useAppSelector((state) => state.products.items);
  const isSortingEnabled = useAppSelector((state) => state.sort.withSort);
  const sortType = useAppSelector((state) => state.sort.sortType);

  useEffect(() => {
    dispatch(
      fetchProducts({ page, withSort: isSortingEnabled, sortValue: sortType })
    );
  }, [dispatch, isSortingEnabled, page, sortType]);

  return (
    <>
      <ProductsHeading>{'Product'}</ProductsHeading>
      <div>
        <ProductTypeButton
          onClick={() =>
            dispatch(filterProductsByType({ page, filterType: 'mug' }))
          }
        >
          {'mug'}
        </ProductTypeButton>
        <ProductTypeButton
          onClick={() =>
            dispatch(filterProductsByType({ page, filterType: 'shirt' }))
          }
        >
          {'shirt'}
        </ProductTypeButton>
      </div>
      <ProductCardWrapper>
        {items?.length > 0 ? (
          items.map((item, index) => (
            <SingleProduct key={index} product={item} />
          ))
        ) : (
          <div>{'No products'}</div>
        )}
      </ProductCardWrapper>
      <PaginationWrapper
        count={109}
        color="primary"
        shape="rounded"
        onChange={(e, page) => dispatch(setPage(page))}
      />
    </>
  );
};
