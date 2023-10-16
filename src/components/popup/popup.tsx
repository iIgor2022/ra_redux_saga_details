import { useParams } from 'react-router-dom';
import './popup.scss';
import { useDispatch } from 'react-redux';
import { progressRequestDetails } from '../../features/detialPrice/detailsPriceSlice';
import { progressRequest } from '../../features/prices/pricesSlice';
import Button from '../button/button';

export default function Popup({ text }: { text: string }): JSX.Element {
  const params = useParams();
  const dispatch = useDispatch();

  const repeatedRequest = (): void => {
    if (params.id) {
      dispatch(progressRequestDetails(params.id));
      return;
    }
    dispatch(progressRequest());
  };

  return (
    <div className='popup-wrapper'>
      <p className='popup-main'>
        {text}
      </p>
      <Button
        className='blackButton'
        action={repeatedRequest}
        nameButton='Повторить запрос'
        typeButton='button'
      />
    </div>
  );
}