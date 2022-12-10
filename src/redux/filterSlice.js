import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    filter(_, action) {
      return action.payload;
    },
  },
});

export const { filter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
