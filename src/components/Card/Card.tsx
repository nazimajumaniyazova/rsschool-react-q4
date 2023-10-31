import './Card.scss';

import { ICard } from '../../type/ICard';
import { type FC } from 'react';

const Card: FC<ICard> = (cards) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={cards.image} alt={cards.name} className="card-img__image" />
      </div>
      <div className="card-info">
        <p className="card-name">Name: {cards.name}</p>
        <p className="card-score">Status: {cards.status}</p>
        <p className="card-date">Species: {cards.species}</p>
        <p className="card-score">Gender: {cards.gender}</p>
      </div>
    </div>
  );
};

export default Card;
