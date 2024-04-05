import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export type Coin = {
  [key: string]: [string, string];
}

export type CoinsState = {
  data: Coin;
  error: boolean;
}

export const initialCoinState: Coin = {
  "BTC": ["", ""],
  "ETH": ["", ""],
  "USDT": ["", ""],
};

 const initialState: CoinsState = {
  data: initialCoinState,
  error: false,
};

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    updateCoins: (state, action: PayloadAction<Coin>) => {
      state.data = action.payload;
      state.error = false; // reset error state when new data is received
    },
    updateErrorState: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});


export const { updateCoins, updateErrorState } = coinsSlice.actions;

export const selectCoins = (state: RootState) => state.coins.data;
export const selectError = (state: RootState) => state.coins.error;

export default coinsSlice.reducer;