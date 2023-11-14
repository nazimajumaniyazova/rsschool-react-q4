import './Card.scss';

import { ICard } from '../../type/ICard';
import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

type CardType = {
  card: ICard;
  urlValue: string;
};
const Card: FC<CardType> = ({ card, urlValue }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate({
    //   pathname: `detail=${card.id}`,
    //   search: ``,
    //   state:
    // });
    navigate(`detail=${card.id}`, { state: { path: urlValue } });
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
