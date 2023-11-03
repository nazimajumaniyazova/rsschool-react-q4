import { FC, useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/Search/SearchBar';
import { ICard } from '../../type/ICard';
import ThrowErrorBtn from '../../components/ThrowErrorBtn/ThrowErrorBtn';

const Home: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const [cards, setCards] = useState<Array<ICard>>([]);

  const onSearch = async (name: string) => {
    let url = '';
    if (!name) {
      url = 'https://rickandmortyapi.com/api/character';
    } else {
      url = `https://rickandmortyapi.com/api/character?name=${name}`;
    }

    setIsLoading(true);
    setCards([]);
    setErr('');
    const res: Response = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) {
      setIsLoading(false);
      setCards([]);
      setErr(data.error);
      return;
    }
    setIsLoading(false);
    setCards(data.results);
    setErr('');
  };

  useEffect(() => {
    onSearch(localStorage.getItem('inputValue') || '');
  }, []);

  return (
    <>
      <ThrowErrorBtn />
      <header>
        <SearchBar onSearch={onSearch} />
      </header>
      <main>
        {err && <p className="loading">{err}</p>}
        {isLoading && <p className="loading">Loading...</p>}
        {cards && <CardList cards={cards} />}
      </main>
    </>
  );
};

export default Home;
