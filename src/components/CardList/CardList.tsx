import './CardList.scss';

import { Component } from 'react';
import Card from '../Card/Card';
import { ICard } from '../../type/ICard';

interface IProps {
  cards: Array<ICard>;
}

export default class CardList extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className="cards-section">
        <div className="container">
          <ul className="cards-container">
            {this.props.cards.map((card) => (
              <li key={card.id}>
                <Card {...card} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
