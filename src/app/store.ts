import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from '../components/';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default store;
