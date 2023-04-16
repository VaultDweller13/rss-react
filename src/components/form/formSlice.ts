import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardProps } from '../';

const initialState: CardProps[] = [];

export const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    storeCard: (state, action: PayloadAction<CardProps>) => {
      state.push(action.payload);
    },
  },
});

export const { storeCard } = formSlice.actions;
export default formSlice.reducer;
