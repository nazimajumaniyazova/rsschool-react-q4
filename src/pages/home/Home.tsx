import './Home.scss';

import { FC, useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/Search/SearchBar';
import { ICard } from '../../type/ICard';
import ThrowErrorBtn from '../../components/ThrowErrorBtn/ThrowErrorBtn';
import { useNavigate, Outlet } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

const Home: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const [cards, setCards] = useState<Array<ICard>>([]);

  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);

  const onSearch = async (name: string) => {
    let url = '';
    if (!name) {
      url = BASE_URL;
    } else {
      url = BASE_URL + `?name=${name}`;
    }

    fetchData(url);
  };

  const navigate = useNavigate();

  const handlePaginationClick = (currentPage: number) => {
    if (currentPage === 1) {
      navigate({
        pathname: '/',
        search: ``,
      });
      fetchData(BASE_URL + `?page=${currentPage}`);
      return;
    }
    navigate({
      pathname: '/',
      search: `?page=${currentPage}`,
    });
    fetchData(BASE_URL + `?page=${currentPage}`);
  };

  useEffect(() => {
    onSearch(localStorage.getItem('inputValue') || '');
  }, []);

  const fetchData = async (url: string) => {
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
    setTotalPages(data.info?.pages);
    setErr('');
  };

  return (
    <>
      <ThrowErrorBtn />
      <header>
        <SearchBar onSearch={onSearch} />
      </header>
      <main>
        {err && <p className="loading">{err}</p>}
        {isLoading && <p className="loading">Loading...</p>}
        <div className="main">
          <div className="main__list">
            {cards && <CardList cards={cards} />}
          </div>

          <div className="main__detail">
            <Outlet />
          </div>
        </div>

        <div className="pagination-wrap">
          <Pagination
            totalPages={totalPages}
            setcurrentPage={setcurrentPage}
            currentPage={currentPage}
            handlePaginationClick={handlePaginationClick}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
