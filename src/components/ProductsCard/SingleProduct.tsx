import { addItem } from '../../store/slices/ShoppingCartSlice';
import { useAppDispatch } from '../../store/hooks';
import ProductItem from '../../api/types/ProductItem';

import { PriceWrapper } from '../common.styled';
import {
  ProductWrapper,
  ImageWrapper,
  ProductName,
  AddButton,
} from './ProductCard.styled';

export const SingleProduct: React.FC<{ product: ProductItem }> = ({
  product,
}) => {
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
