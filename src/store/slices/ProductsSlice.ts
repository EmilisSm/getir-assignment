import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import ItemsService from '../../api/itemsService';
import ProductItem from '../../api/types/ProductItem';

interface ProductsState {
  items: Array<ProductItem>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
  page: number;
  pageCount: number;
}

const initialState: ProductsState = {
  items: [],
  status: 'idle',
  error: null,
  page: 1,
  pageCount: 0,
};

interface fetchProductArguments {
  page: number;
  sortValue?: string;
  filterType?: string;
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (args: fetchProductArguments) => {
    let url = 'items?';
    const { page, sortValue, filterType } = args;
    if (sortValue) {
      switch (sortValue) {
        case 'PriceAsc':
          url = url + '_sort=price&_order=asc&';
          break;
        case 'PriceDesc':
          url = url + '_sort=price&_order=desc&';
          break;
        case 'DateAsc':
          url = url = '_sort=added&_order=asc&';
          break;
        case 'DateDesc':
          url = url + '_sort=added&_order=desc&';
          break;
        default:
          break;
      }
    }
    if (filterType) {
      url = url + `itemType=${filterType}&`;
    }
    // we need to resolve response promise before returing the action payload
    const response = await ItemsService.fetchProductItems(url, page);
    const data = await response.response;
    const total = response.total;
    return { data, total };
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
        state.items = action.payload.data;
        state.pageCount = Math.ceil(Number(action.payload.total) / 16);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setPage } = productsSlice.actions;

export default productsSlice.reducer;
