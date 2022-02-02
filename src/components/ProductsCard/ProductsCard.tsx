import { useEffect, useState } from 'react';

import ProductItem from '../../api/types/ProductItem';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchProducts, setPage } from '../../store/slices/ProductsSlice';
import {
  ProductCardStyled,
  PaginationStyled,
  ProductsHeadingStyled,
  ProductTypeButtonStyled,
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
      <ProductsHeadingStyled>{'Product'}</ProductsHeadingStyled>
      <div>
        <ProductTypeButtonStyled
          className={filterType === 'mug' ? 'focused' : ''}
          onClick={() => setFilterType('mug')}
        >
          {'mug'}
        </ProductTypeButtonStyled>
        <ProductTypeButtonStyled
          className={filterType === 'shirt' ? 'focused' : ''}
          onClick={() => setFilterType('shirt')}
        >
          {'shirt'}
        </ProductTypeButtonStyled>
      </div>
      <ProductCardStyled>
        {items?.length > 0 ? (
          items.map((item, index) => (
            <SingleProduct key={index} product={item} />
          ))
        ) : (
          <div>{'No products'}</div>
        )}
      </ProductCardStyled>
      <PaginationStyled
        count={pageCount}
        color="primary"
        shape="rounded"
        onChange={(e, page) => dispatch(setPage(page))}
      />
    </>
  );
};
