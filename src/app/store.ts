import { configureStore } from '@reduxjs/toolkit';
import { searchReducer, gameDataReducer } from '../components/';

const store = configureStore({
  reducer: {
    search: searchReducer,
    gameData: gameDataReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
