import { useEffect, useState } from 'react';

import ProductItem from '../../api/types/ProductItem';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchProducts, setPage } from '../../store/slices/ProductsSlice';
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
  const [filterType, setFilterType] = useState('');
  const dispatch = useAppDispatch();
  const { items, page, pageCount } = useAppSelector((state) => state.products);
  const sortType = useAppSelector((state) => state.sort.sortType);

  useEffect(() => {
    dispatch(fetchProducts({ page, sortValue: sortType, filterType }));
  }, [dispatch, page, sortType, filterType]);

  return (
    <>
      <ProductsHeading>{'Product'}</ProductsHeading>
      <div>
        <ProductTypeButton
          className={filterType === 'mug' ? 'focused' : ''}
          onClick={() => setFilterType('mug')}
        >
          {'mug'}
        </ProductTypeButton>
        <ProductTypeButton
          className={filterType === 'shirt' ? 'focused' : ''}
          onClick={() => setFilterType('shirt')}
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
        count={pageCount}
        color="primary"
        shape="rounded"
        onChange={(e, page) => dispatch(setPage(page))}
      />
    </>
  );
};
