import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SortState {
  withSort: boolean;
  sortType: string | undefined;
}

const initialState: SortState = {
  withSort: false,
  sortType: undefined,
};

const sortingSlice = createSlice({
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
