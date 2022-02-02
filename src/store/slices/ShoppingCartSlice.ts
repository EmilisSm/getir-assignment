import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isEqual } from 'lodash/';
import ProductItem from '../../api/types/Product';

interface ShoppingCartState {
  items: Array<{ product: ProductItem; count: number }>;
}

const initialState: ShoppingCartState = {
  items: [],
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductItem>) => {
      const productItem = state.items.find(
        (item) => item.product.slug === action.payload.slug
      );
      if (!productItem) {
        state.items = [...state.items, { product: action.payload, count: 1 }];
      } else {
        [...state.items, { ...productItem, count: (productItem.count += 1) }];
      }
    },
    removeItem: (state, action: PayloadAction<ProductItem>) => {
      const productItem = state.items.find(
        (item) => item.product.slug === action.payload.slug
      );

      if (productItem && productItem?.count > 1) {
        [...state.items, { ...productItem, count: (productItem.count -= 1) }];
      } else {
        if (state.items.length === 1) {
          state.items = [];
        } else {
          state.items = state.items.filter(
            (item) => !isEqual(item, productItem)
          );
        }
      }
    },
  },
});

export const { addItem, removeItem } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
