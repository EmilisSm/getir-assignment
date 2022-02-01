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

interface fetchProductArguments {
  page: number;
  withSort: boolean;
  sortValue?: string;
}

interface filterByTypeArguments {
  page: number;
  filterType: string;
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (data: fetchProductArguments) => {
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

export const filterProductsByType = createAsyncThunk(
  'products/filterProductsByType',
  async (data: filterByTypeArguments) => {
    const { page, filterType } = data;
    return await ItemsService.filterByProductType(page, filterType);
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
      })
      .addCase(filterProductsByType.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(filterProductsByType.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(filterProductsByType.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setPage } = productsSlice.actions;

export default productsSlice.reducer;
