import { addItem } from '../../store/slices/ShoppingCartSlice';
import { useAppDispatch } from '../../store/hooks';
import ProductItem from '../../api/types/ProductItem';

import { PriceStyled } from '../common.styled';
import {
  ProductStyled,
  ImageStyled,
  ProductNameStyled,
  AddButtonStyled,
} from './ProductCard.styled';

export const SingleProduct: React.FC<{ product: ProductItem }> = ({
  product,
}) => {
  const dispatch = useAppDispatch();
  return (
    <ProductStyled>
      <ImageStyled
        src={
          product.itemType === 'mug'
            ? 'https://ih1.redbubble.net/image.989961796.9179/ur,mug_lifestyle,square,1000x1000.jpg'
            : 'https://image.pngaaa.com/161/3350161-middle.png'
        }
        alt={product.itemType === 'mug' ? 'Picture of mug' : 'Picture of shirt'}
      />
      <PriceStyled>&#x20BA; {product.price}</PriceStyled>
      <ProductNameStyled>{product.name}</ProductNameStyled>
      <AddButtonStyled onClick={() => dispatch(addItem(product))}>
        Add
      </AddButtonStyled>
    </ProductStyled>
  );
};
