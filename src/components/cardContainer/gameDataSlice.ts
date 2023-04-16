import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRawGamesData, getDataById, type GameData } from '../../services/api';

type GameDataResponse = Awaited<ReturnType<typeof getRawGamesData>>;
type GameDataByIdResponse = Awaited<ReturnType<typeof getDataById>>;
type FetchStatus = 'idle' | 'pending' | 'succeeded' | 'failed';

type GameDataState = {
  fetchedGames: GameData[];
  fetchedById: GameData | null;
  status: FetchStatus;
  error: string;
};

const initialState: GameDataState = {
  fetchedGames: [],
  fetchedById: null,
  status: 'idle',
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
  extraReducers(builder) {
    builder.addCase(fetchGamesData.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(fetchGamesData.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.fetchedGames = action.payload.data;
      state.error = action.payload.error;
    });
    builder.addCase(fetchGamesData.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || '';
    });
    builder.addCase(fetchDataById.fulfilled, (state, action) => {
      state.fetchedById = action.payload.data;
      state.error = action.payload.error;
    });
  },
});

export const fetchGamesData = createAsyncThunk('gameData/fetchGames', async (query: string) => {
  const response = await getRawGamesData(query);
  return response;
});

export const fetchDataById = createAsyncThunk('gameData/fetchById', async (id: number) => {
  const response = await getDataById(id);
  return response;
});

export const { storeGames, storeCurrentGame, clearCurrentGame } = gameDataSlice.actions;
export default gameDataSlice.reducer;
