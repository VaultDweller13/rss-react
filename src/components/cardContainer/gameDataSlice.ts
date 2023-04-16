import { AnyAction, PayloadAction, ThunkAction, createSlice } from '@reduxjs/toolkit';
import { getRawGamesData, getDataById, type GameData } from '../../services/api';
import { RootState } from 'app/store';

type GameDataResponse = Awaited<ReturnType<typeof getRawGamesData>>;
type GameDataByIdResponse = Awaited<ReturnType<typeof getDataById>>;

type GameDataState = {
  fetchedGames: GameData[];
  fetchedById: GameData | null;
  error: string;
};

const initialState: GameDataState = {
  fetchedGames: [],
  fetchedById: null,
  error: '',
};

export const gameDataSlice = createSlice({
  name: 'gameData',
  initialState,
  reducers: {
    storeGames: (state, action: PayloadAction<GameDataResponse>) => {
      state.fetchedGames = action.payload.data;
      state.error = action.payload.error;
    },
    storeCurrentGame: (state, action: PayloadAction<GameDataByIdResponse>) => {
      state.fetchedById = action.payload.data;
      state.error = action.payload.error;
    },
    clearCurrentGame: (state) => {
      state.fetchedById = null;
    },
  },
});

export const fetchGamesData = (query: string): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const response = await getRawGamesData(query);
    dispatch(storeGames(response));
  };
};

export const fetchDataById = (id: number): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const response = await getDataById(id);
    dispatch(storeCurrentGame(response));
  };
};

export const { storeGames, storeCurrentGame, clearCurrentGame } = gameDataSlice.actions;
export default gameDataSlice.reducer;
