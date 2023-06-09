import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRawGamesData, getDataById, type GameData } from '../../services/api';

type GameDataResponse = Awaited<ReturnType<typeof getRawGamesData>>;
type GameDataByIdResponse = Awaited<ReturnType<typeof getDataById>>;
type FetchStatus = 'idle' | 'pending' | 'succeeded' | 'failed';
type FetchGamesParams = {
  query: string;
  page?: number;
};

type GameDataState = {
  count: number;
  fetchedGames: GameData[];
  fetchedById: GameData | null;
  status: FetchStatus;
  error: string;
};

const initialState: GameDataState = {
  count: 0,
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
      state.count = action.payload.data.count;
      state.fetchedGames = action.payload.data.results;
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
      state.count = action.payload.data.count;
      state.fetchedGames = action.payload.data.results;
      state.error = action.payload.error;
    });
    builder.addCase(fetchGamesData.rejected, (state, action) => {
      state.status = 'failed';
      state.count = 0;
      state.error = action.error.message || '';
    });
    builder.addCase(fetchDataById.fulfilled, (state, action) => {
      state.fetchedById = action.payload.data;
      state.error = action.payload.error;
    });
  },
});

export const fetchGamesData = createAsyncThunk(
  'gameData/fetchGames',
  async ({ query, page }: FetchGamesParams) => {
    const response = await getRawGamesData(query, page);
    return response;
  }
);

export const fetchDataById = createAsyncThunk('gameData/fetchById', async (id: number) => {
  const response = await getDataById(id);
  return response;
});

export const { storeGames, storeCurrentGame, clearCurrentGame } = gameDataSlice.actions;
export default gameDataSlice.reducer;
