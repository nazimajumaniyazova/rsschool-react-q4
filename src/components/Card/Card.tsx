import './Card.scss';

import { ICard } from '../../type/ICard';
import { type FC } from 'react';

const Card: FC<ICard> = (card) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={card.image} alt={card.name} className="card-img__image" />
      </div>
      <div className="card-info">
        <p className="card-name">Name: {card.name}</p>
        <p className="card-score">Status: {card.status}</p>
        <p className="card-date">Species: {card.species}</p>
        <p className="card-score">Gender: {card.gender}</p>
      </div>
    </div>
  );
};

export default Card;
