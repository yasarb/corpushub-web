/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const searchInitialState = {
  query: '',
};

const search = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    setQuery(state, { payload }) {
      state.query = payload;
      // return [...state, query: payload];
    },
  },
});

export const {
  setQuery,
} = search.actions;

export default search.reducer;
