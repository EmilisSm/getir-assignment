import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './slices/shoppingCartSlice';
import productsSlice from './slices/productsSlice';
import sortingSlice from './slices/sortingSlice';
import filterSlice from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    sort: sortingSlice,
    shoppingCart: shoppingCartReducer,
    products: productsSlice,
    filter: filterSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
