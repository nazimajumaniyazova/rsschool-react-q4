import "./Card.scss";
import { Component } from "react";

export interface ICard {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

export default class Card extends Component<ICard> {
  constructor(props: ICard) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div className="card-img">
          <img
            src={this.props.image}
            alt={this.props.name}
            className="card-img__image"
          />
        </div>
        <div className="card-info">
          <p className="card-name">Status: {this.props.status}</p>
          <p className="card-date">Species: {this.props.species}</p>
          <p className="card-score">Gender: {this.props.gender}</p>
        </div>
      </div>
    );
  }
}
