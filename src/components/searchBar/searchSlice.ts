import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    save: (_, action) => action.payload,
    clear: () => '',
  },
});

export const { save, clear } = searchSlice.actions;

export default searchSlice.reducer;
