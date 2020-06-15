import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from '../search.slice';

const rootReducer = combineReducers({
  search: searchReducer,
});

export default rootReducer;
