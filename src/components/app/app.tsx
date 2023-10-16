import { Route, Routes, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import './app.scss';
import { useEffect } from 'react';
import { progressRequest } from '../../features/prices/pricesSlice';
import Loader from '../loader/loader';
import Popup from '../popup/popup';
import PriceList from '../priceList/priceList';
import ChangePrice from '../changePrice/changePrice';

export default function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(progressRequest());
    navigate('/services');
  }, []);

  const { loading, error } = useAppSelector((state) => state.pricesSlice);
  const loader = loading ? <Loader /> : null;
  const popup = error ? <Popup text={error} /> : null;

  return (
    <>
      {loader}
      {popup}
      <Routes>
        <Route path='/services' element={<PriceList />} />
        <Route path='/services/:id' element={<ChangePrice />} />
      </Routes>
    </>
  );
}