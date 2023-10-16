import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Price = {
  id: number | null,
  name: string,
  price?: number,
  content: string,
};

type InitialStateType = {
  detailsPrice: Price,
  loading: boolean,
  error: string,
};

const initialPrice = {
  id: null,
  name: '',
  content: '',
};

const initialState: InitialStateType = {
  detailsPrice: initialPrice,
  loading: false,
  error: '',
};

export const detailsPriceSlice = createSlice({
  name: 'detailsPrice',
  initialState,
  reducers: {
    progressRequestDetails: (state, action: PayloadAction<string | undefined>) => {
      state.loading = true;
      state.error = '';
    },

    searchFailureDetails: (state, action: PayloadAction<{ message: string }>) => {
      const { message } = action.payload;

      state.error = message;
      state.loading = false;
    },

    searchSuccessDetails: (state, action: PayloadAction<InitialStateType>) => {
      const { detailsPrice } = action.payload;

      state.detailsPrice = detailsPrice;
      state.loading = false;
      state.error = '';
    },
  },
});

export const {
  progressRequestDetails, searchFailureDetails, searchSuccessDetails,
} = detailsPriceSlice.actions;
export default detailsPriceSlice.reducer;