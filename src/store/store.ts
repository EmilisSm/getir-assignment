import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './slices/ShoppingCartSlice';
import productsSlice from './slices/ProductsSlice';
import sortingSlice from './slices/SortingSlice';

export const store = configureStore({
  reducer: {
    sort: sortingSlice,
    shoppingCart: shoppingCartReducer,
    products: productsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
