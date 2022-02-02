import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SortState {
  sortType: string | undefined;
}

const initialState: SortState = {
  sortType: undefined,
};

const sortingSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSorting: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    },
  },
});

export const { setSorting } = sortingSlice.actions;

export default sortingSlice.reducer;
