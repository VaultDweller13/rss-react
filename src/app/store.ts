import { configureStore } from '@reduxjs/toolkit';
import { searchReducer, gameDataReducer, formReducer } from '../components/';

const store = configureStore({
  reducer: {
    search: searchReducer,
    gameData: gameDataReducer,
    userCards: formReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
