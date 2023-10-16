import { useAppSelector } from "../../hooks";
import PriceItem from "../priceItem/priceItem";

export default function PriceList(): JSX.Element {
  const prices = useAppSelector((store) => store.pricesSlice.prices);

  return (
    <ul className="price-list__list">
      {prices.map((price) => (
        <PriceItem
          key={price?.id}
          id={price!.id}
          name={price!.name}
          price={price!.price}
        />
      ))}
    </ul>
  );
}