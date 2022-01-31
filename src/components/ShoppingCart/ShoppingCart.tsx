import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ProductItem from '../../api/types/ProductItem';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeItem, addItem } from '../../store/slices/ShoppingCartSlice';
import {
  ShoppingCartWrapper,
  ShoppingCartItem,
  ItemButton,
  ItemQuantity,
  TotalAmount,
} from './ShoppingCart.styled';
import { PriceWrapper } from '../common.styled';

const countTotal = (
  shoppingCartItems: Array<{ product: ProductItem; count: number }>
) => {
  const allPrices: Array<number> = shoppingCartItems.map(
    (item) => item.product.price * item.count
  );
  return allPrices.reduce((a: number, b: number) => a + b).toFixed(2);
};

export const ShoppingCart: React.FC<{}> = () => {
  const shoppingCartItems = useAppSelector((state) => state.shoppingCart.items);
  const dispatch = useAppDispatch();

  return (
    <ShoppingCartWrapper>
      {shoppingCartItems.map((item, index) => (
        <ShoppingCartItem key={index}>
          <div>
            <div>{item.product.name}</div>
            <PriceWrapper>$ {item.product.price}</PriceWrapper>
          </div>
          <ItemButton>
            <RemoveIcon
              htmlColor="#1ea4ce"
              onClick={() => dispatch(removeItem(item.product))}
            />
            <ItemQuantity>{item.count}</ItemQuantity>
            <AddIcon
              htmlColor="#1ea4ce"
              onClick={() => dispatch(addItem(item.product))}
            />
          </ItemButton>
        </ShoppingCartItem>
      ))}
      <TotalAmount>
        &#x20BA; {shoppingCartItems?.length && countTotal(shoppingCartItems)}
      </TotalAmount>
    </ShoppingCartWrapper>
  );
};
