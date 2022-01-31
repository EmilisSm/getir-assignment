import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface SortState {
  withSort: boolean;
  sortType: string | undefined;
}

const initialState: SortState = {
  withSort: false,
  sortType: undefined,
};

export const sortingSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSorting: (state, action: PayloadAction<string>) => {
      state.withSort = true;
      state.sortType = action.payload;
    },
  },
});

export const { setSorting } = sortingSlice.actions;

export default sortingSlice.reducer;
