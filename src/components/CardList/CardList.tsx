import "./CardList.scss";

import { Component } from "react";
import Card, { ICard } from "../Card/Card";
import { http } from "../../utils/http";

interface IProps {
  smth?: string;
}

interface IState {
  cards: Array<ICard> | undefined;
}

interface IResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Array<ICard>;
}

export default class CardList extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  async componentDidMount() {
    const res = await http<IResponse>(
      "https://rickandmortyapi.com/api/character",
    );
    this.setState({ cards: res.parsedBody?.results });
  }
  render() {
    return (
      <div className="cards-section">
        <div className="container">
          <ul className="cards-container">
            {this.state.cards &&
              this.state.cards.map((card) => (
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
