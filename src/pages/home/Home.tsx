import './Home.scss';

import { FC, useContext, useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/Search/SearchBar';
import ThrowErrorBtn from '../../components/ThrowErrorBtn/ThrowErrorBtn';
import Pagination from '../../components/Pagination/Pagination';
import {
  cardListContext,
  cardListContextType,
} from '../../context/cardListContext';

export const BASE_URL = 'https://rickandmortyapi.com/api/character';

const Home: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const { cards, setCards } = useContext(
    cardListContext
  ) as cardListContextType;

  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);

  const [urlValue, setUrlValue] = useState('');

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
      setUrlValue('');
      return;
    }
    navigate({
      pathname: '/',
      search: `?page=${currentPage}`,
    });
    setUrlValue(`?page=${currentPage}`);
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
            {cards && <CardList cards={cards} urlValue={urlValue} />}
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
