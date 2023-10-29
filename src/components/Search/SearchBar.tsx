import React, { Component } from 'react';
import './SearchBar.scss';

interface IProps {
  onSearch: (name: string) => void;
}

interface IState {
  value: string;
}
export default class SearchBar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: localStorage.getItem('inputValue') || '',
    };
  }

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };

  onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props.onSearch(this.state.value);
      localStorage.setItem('inputValue', this.state.value);
    }
  };

  onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    localStorage.setItem('inputValue', this.state.value);
    this.props.onSearch(this.state.value);
  };

  render() {
    return (
      <div className="search-bar-section">
        <div className="container centralize search-bar__wrapper">
          <p className="search-bar__title">Search by characters' name</p>
          <form className="search-bar" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="search-bar__input"
              placeholder="Search"
              onInput={this.onInputChange}
              onKeyDown={this.onKeyDown}
              value={this.state.value}
            />
            <button type="submit" className="search-bar__btn">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}
