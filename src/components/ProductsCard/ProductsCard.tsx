import { useEffect } from 'react';

import ProductItem from '../../api/types/ProductItem';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchProducts, setPage } from '../../store/slices/ProductsSlice';
import { addItem } from '../../store/slices/ShoppingCartSlice';

import { PriceWrapper } from '../common.styled';
import {
  ProductCardWrapper,
  ProductWrapper,
  AddButton,
  ImageWrapper,
  ProductName,
  PaginationWrapper,
} from './ProductCard.styled';

interface ProductsCardProps {
  products?: Array<ProductItem>;
}

const Product: React.FC<{ product: ProductItem }> = ({ product }) => {
  const dispatch = useAppDispatch();
  return (
    <ProductWrapper>
      <ImageWrapper
        src={
          product.itemType === 'mug'
            ? 'https://ih1.redbubble.net/image.989961796.9179/ur,mug_lifestyle,square,1000x1000.jpg'
            : 'https://image.pngaaa.com/161/3350161-middle.png'
        }
        alt={product.itemType === 'mug' ? 'Picture of mug' : 'Picture of shirt'}
      />
      <PriceWrapper>&#x20BA; {product.price}</PriceWrapper>
      <ProductName>{product.name}</ProductName>
      <AddButton onClick={() => dispatch(addItem(product))}>Add</AddButton>
    </ProductWrapper>
  );
};

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
      <h3>Product</h3>
      <ProductCardWrapper>
        {items && items?.length > 0 ? (
          items.map((item, index) => <Product key={index} product={item} />)
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
