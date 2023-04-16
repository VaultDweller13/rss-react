import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardProps } from '../';

type CustomCardProps = Omit<CardProps, 'onClick'>;
const initialState: CustomCardProps[] = [];

export const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    storeCard: (state, action: PayloadAction<CustomCardProps>) => {
      state.push(action.payload);
    },
  },
});

export const { storeCard } = formSlice.actions;
export default formSlice.reducer;
