import './CardList.scss';

import { type FC } from 'react';
import Card from '../Card/Card';
import { ICard } from '../../type/ICard';
import { useNavigate } from 'react-router-dom';

interface IProps {
  cards: Array<ICard>;
}

const CardList: FC<IProps> = ({ cards }) => {
  const navigate = useNavigate();

  const goToPosts = () =>
    navigate({
      pathname: '/',
      search: '?page=2',
    });

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
        <div className="pagination-wrap">
          <ul className="pagination">
            <li className="pagination__item ">&laquo;</li>
            <li className="pagination__item active">1</li>
            <li className="pagination__item" onClick={goToPosts}>
              2
            </li>
            <li className="pagination__item">3</li>
            <li className="pagination__item">&raquo;</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardList;
