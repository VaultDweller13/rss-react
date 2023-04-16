import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    save: (_, action: PayloadAction<string>) => action.payload,
  },
});

export const { save } = searchSlice.actions;

export default searchSlice.reducer;
