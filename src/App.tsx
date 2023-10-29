import { Component } from 'react';
import CardList from './components/CardList/CardList';
import SearchBar from './components/Search/SearchBar';
import { http } from './utils/http';
import { IResponse } from './type/IResponse';
import { ICard } from './type/Icard';

interface IProps {
  smth?: string;
}

interface IState {
  cards: Array<ICard>;
  isLoading: boolean;
}

export default class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoading: false,
      cards: [],
    };
  }

  onSearch = async (name: string) => {
    let url = '';
    if (!name) {
      url = 'https://rickandmortyapi.com/api/character';
    } else {
      url = `https://rickandmortyapi.com/api/character?name=${name}`;
    }
    this.setState({ isLoading: true, cards: [] });
    const res = await http<IResponse>(url);
    if (res.parsedBody?.results) {
      this.setState({ cards: res.parsedBody?.results, isLoading: false });
    }
  };

  async componentDidMount() {
    this.onSearch(localStorage.getItem('inputValue') || '');
  }
  render() {
    return (
      <>
        <header>
          <SearchBar onSearch={this.onSearch} />
        </header>
        <main>
          {this.state.isLoading && <p className="loading">Loading...</p>}
          {this.state.cards && <CardList cards={this.state.cards} />}
        </main>
      </>
    );
  }
}
