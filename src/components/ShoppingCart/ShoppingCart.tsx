import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ProductItem from '../../api/types/ProductItem';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeItem, addItem } from '../../store/slices/ShoppingCartSlice';
import {
  ShoppingCartCardStyled,
  ShoppingCartItemStyled,
  ItemButtonStyled,
  ItemQuantityStyled,
  TotalAmountStyled,
} from './ShoppingCart.styled';
import { PriceStyled } from '../common.styled';

const countTotal = (
  ShoppingCartItemStyleds: Array<{ product: ProductItem; count: number }>
) => {
  const allPrices: Array<number> = ShoppingCartItemStyleds.map(
    (item) => item.product.price * item.count
  );
  return allPrices.reduce((a: number, b: number) => a + b).toFixed(2);
};

export const ShoppingCart: React.FC = () => {
  const ShoppingCartItemStyleds = useAppSelector(
    (state) => state.shoppingCart.items
  );
  const dispatch = useAppDispatch();

  return (
    <ShoppingCartCardStyled>
      {ShoppingCartItemStyleds?.length ? (
        ShoppingCartItemStyleds.map((item, index) => (
          <ShoppingCartItemStyled key={index}>
            <div>
              <div>{item.product.name}</div>
              <PriceStyled>$ {item.product.price}</PriceStyled>
            </div>
            <ItemButtonStyled>
              <RemoveIcon
                htmlColor="#1ea4ce"
                onClick={() => dispatch(removeItem(item.product))}
              />
              <ItemQuantityStyled>{item.count}</ItemQuantityStyled>
              <AddIcon
                htmlColor="#1ea4ce"
                onClick={() => dispatch(addItem(item.product))}
              />
            </ItemButtonStyled>
          </ShoppingCartItemStyled>
        ))
      ) : (
        <ShoppingCartItemStyled>
          {'no products selected'}
        </ShoppingCartItemStyled>
      )}
      <TotalAmountStyled>
        &#x20BA;{' '}
        {ShoppingCartItemStyleds?.length && countTotal(ShoppingCartItemStyleds)}
      </TotalAmountStyled>
    </ShoppingCartCardStyled>
  );
};
