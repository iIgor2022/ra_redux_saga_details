import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Price = {
  id: number,
  name: string,
  price: number,
  content: string,
};

type InitialState = {
  prices: Price[],
  loading: boolean,
  error: string | null,
};

const initialState: InitialState = {
  prices: [],
  loading: false,
  error: '',
};

export const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    progressRequest: (state) => {
      state.loading = false;
      state.error = null;
    },

    searchFailure: (state, action: PayloadAction<{ message: string }>) => {
      const { message } = action.payload;

      state.error = message;
      state.loading = false;
    },

    searchSuccess: (state, action: PayloadAction<InitialState>) => {
      const { prices } = action.payload;

      state.prices = prices;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  progressRequest, searchFailure, searchSuccess
} = pricesSlice.actions;
export default pricesSlice.reducer;