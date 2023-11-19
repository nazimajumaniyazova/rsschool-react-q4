import './CardList.scss';

import { type FC } from 'react';
import Card from '../Card/Card';
import { ICard } from '../../type/ICard';
import { useCardListQuery } from '../../store/cardListSlice';

interface IProps {
  // cards: Array<ICard>;
  urlValue: string;
}

const CardList: FC<IProps> = ({ urlValue }) => {
  const { data, isLoading, error } = useCardListQuery({ pageNumber: 1 });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Smth went wrong! Try again. </div>;
  }
  return (
    <div className="cards-section">
      <div className="container">
        <ul className="cards-container">
          {data?.results.map((card: ICard) => (
            <li key={card.id}>
              <Card card={card} urlValue={urlValue} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardList;
