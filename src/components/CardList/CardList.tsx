import './CardList.scss';

import { type FC } from 'react';
import Card from '../Card/Card';
import { ICard } from '../../type/ICard';

interface IProps {
  cards: Array<ICard>;
}

const CardList: FC<IProps> = ({ cards }) => {
  return (
    <div className="cards-section">
      <div className="container">
        <ul className="cards-container">
          {cards.map((card: ICard) => (
            <li key={card.id}>
              <Card {...card} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardList;
