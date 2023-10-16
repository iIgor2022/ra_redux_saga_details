import { Link } from 'react-router-dom';
import './priceItem.scss';

export default function PriceItem({ name, price, id }: 
  { name: string, price: number, id: number }): JSX.Element {
    return (
      <li className='price-item__item'>
        <Link to={`/services/${id}`}>
          <span className='price-item__text'>
            {`${name} ${price}`}
          </span>
        </Link>
      </li>
    );
  }