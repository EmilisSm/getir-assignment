import { union, uniq } from 'lodash';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import ItemsService from '../../api/service';
import Product from '../../api/types/Product';

interface ProductsState {
  tags: Array<string>;
  brands: Array<string>;
  selected: {
    brands: Array<string>;
    tags: Array<string>;
  };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
}

const initialState: ProductsState = {
  tags: [],
  brands: [],
  selected: {
    brands: [],
    tags: [],
  },
  status: 'idle',
  error: null,
};

export const fetchCompanyBrands = createAsyncThunk(
  'filter/fetchCompanies',
  async () => {
    return await ItemsService.fetchCompanies();
  }
);

export const fetchAllProductTags = createAsyncThunk(
  'filter/fetchAllProducts',
  async () => await ItemsService.fetchAllProducts()
);

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTags: (state, action: PayloadAction<Array<string>>) => {
      state.selected.tags = action.payload;
    },
    setBrands: (state, action: PayloadAction<Array<string>>) => {
      state.selected.brands = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCompanyBrands.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCompanyBrands.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.brands = action.payload.map((item: Product) => item.slug);
      })
      .addCase(fetchCompanyBrands.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchAllProductTags.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductTags.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const allTags = action.payload.map((item: Product) => item.tags);
        state.tags = uniq(union(...allTags));
      })
      .addCase(fetchAllProductTags.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setTags, setBrands } = filterSlice.actions;

export default filterSlice.reducer;
