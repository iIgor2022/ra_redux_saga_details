import { useNavigate, useParams } from 'react-router-dom';
import './changePrice.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { progressRequestDetails, searchSuccessDetails } from '../../features/detialPrice/detailsPriceSlice';
import { useAppSelector } from '../../hooks';
import Loader from '../loader/loader';
import Popup from '../popup/popup';
import Button from '../button/button';

export default function ChangePrice(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const initialPrice = {
    id: null,
    name: '',
    content: '',
  };

  useEffect(() => {
    dispatch(progressRequestDetails(params.id));
  }, [dispatch, params.id]);

  const { detailsPrice, loading, error } =
    useAppSelector((state) => (state.detailsPriceSlice));
  
  let name = '';
  let price: number | undefined;
  let content = '';

  if (detailsPrice !== null) {
    name = detailsPrice.name;
    price = detailsPrice.price;
    content = detailsPrice.content;
  }

  const handleClickCancel = (): void => {
    navigate('/services');
    dispatch(searchSuccessDetails({
      detailsPrice: initialPrice,
      loading: false,
      error: ''
    }));
  }

  const loader = loading ? <Loader /> : null;
  const popup = error !== '' ? <Popup text={error} /> : null;

  return (
    <>
      {loader}
      {popup}
      <div className='change-price-wrapper'>
        <label htmlFor='name'>
          Название
          <input
            type='text'
            id='name'
            value={name}
            readOnly
          />
        </label>
        <label htmlFor='price'>
          Стоимость
          <input
            type='text'
            id='price'
            value={price}
            readOnly
          />
        </label>
        <label htmlFor='description'>
          Описание
          <input
            type='text'
            id='description'
            value={content}
            readOnly
          />
        </label>
        <footer className='change-price__footer'>
          <Button
            className='cancel'
            nameButton='Отмена'
            typeButton='button'
            action={handleClickCancel}
          />
        </footer>
      </div>
    </>
  );
}