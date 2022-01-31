import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import ItemsService from '../../api/itemsService';
import ProductItem from '../../api/types/ProductItem';

interface ProductsState {
  items: Array<ProductItem>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
  page: number;
}

const initialState: ProductsState = {
  items: [],
  status: 'idle',
  error: null,
  page: 1,
};

interface fetchArguments {
  page: number;
  withSort: boolean;
  sortValue?: string;
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (data: fetchArguments) => {
    const { page, withSort, sortValue } = data;
    if (withSort) {
      switch (sortValue) {
        case 'lowToHigh':
          return await ItemsService.sortProductItemsByPriceAsc(page);
        case 'highToLow':
          return await ItemsService.sortProductItemsByPriceDesc(page);
        case 'newToOld':
          return ItemsService.sortProductItemsByDateAsc(page);
        case 'oldToNew':
          return ItemsService.sortProductItemsByDateDesc(page);
        default:
          return await ItemsService.fetchProductItems(page);
      }
    } else {
      return await ItemsService.fetchProductItems(page);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setPage } = productsSlice.actions;

export default productsSlice.reducer;
