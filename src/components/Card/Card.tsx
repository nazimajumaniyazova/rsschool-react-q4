import './Card.scss';

import { ICard } from '../../type/ICard';
import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Card: FC<ICard> = (card) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({
      pathname: `detail=${card.id}`,
      search: ``,
    });
  };
  return (
    <div className="card" onClick={handleClick}>
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
