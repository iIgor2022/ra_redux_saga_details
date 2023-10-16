import { combineEpics, createEpicMiddleware } from "redux-observable";
import { fetchPricesEpic, fetchDetailsPriceEpic } from './epics';
import { configureStore } from "@reduxjs/toolkit";
import pricesSlice from './features/prices/pricesSlice';
import detailsPriceSlice from './features/detialPrice/detailsPriceSlice';

const epicMiddleware = createEpicMiddleware();
const rootEpic = combineEpics(fetchPricesEpic, fetchDetailsPriceEpic);

export const store = configureStore({
  reducer: {
    pricesSlice,
    detailsPriceSlice
  },
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;