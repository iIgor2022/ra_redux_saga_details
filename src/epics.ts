import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { searchFailureDetails, searchSuccessDetails } from './features/detialPrice/detailsPriceSlice';
import { searchFailure, searchSuccess } from './features/prices/pricesSlice';
import { ofType } from 'redux-observable';

export const fetchDetailsPriceEpic = (action$: any): any => action$.pipe(
  ofType('detailsPrice/progressRequestDetails'),
  tap(o => console.log(o)),
  map((o: any) => o.payload),
  switchMap((o) => ajax.getJSON(`${process.env.REACT_APP_BASE_URL}/api/services/${o}`).pipe(
    map((o: any) => searchSuccessDetails({
      detailsPrice: o,
      loading: false,
      error: ''
    })),
    catchError((e) => of(searchFailureDetails(e))),
  )),
);

export const fetchPricesEpic = (action$: any): any => action$.pipe(
  ofType('prices/progressRequest'),
  switchMap(() => ajax.getJSON(`${process.env.REACT_APP_BASE_URL}/api/services`).pipe(
    map((o: any) => searchSuccess({
      prices: o,
      loading: false,
      error: null
    })),
    catchError((e) => of(searchFailure(e))),
  )),
);