import { Component } from 'react';
import CardList from './components/CardList/CardList';
import SearchBar from './components/Search/SearchBar';
import { ICard } from './type/Icard';

interface IProps {
  smth?: string;
}

interface IState {
  cards: Array<ICard>;
  isLoading: boolean;
  err: string | undefined;
}

export default class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoading: false,
      cards: [],
      err: '',
    };
  }

  onSearch = async (name: string) => {
    let url = '';
    if (!name) {
      url = 'https://rickandmortyapi.com/api/character';
    } else {
      url = `https://rickandmortyapi.com/api/character?name=${name}`;
    }
    this.setState({ isLoading: true, cards: [], err: '' });
    const res: Response = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) {
      this.setState({
        cards: [],
        isLoading: false,
        err: data.error,
      });
      return;
    }

    this.setState({
      cards: data.results,
      isLoading: false,
      err: '',
    });
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
          {this.state.err && <p className="loading">{this.state.err}</p>}
          {this.state.isLoading && <p className="loading">Loading...</p>}
          {this.state.cards && <CardList cards={this.state.cards} />}
        </main>
      </>
    );
  }
}
