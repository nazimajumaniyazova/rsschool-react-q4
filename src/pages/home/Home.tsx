import './Home.scss';

import { FC, useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/Search/SearchBar';
import ThrowErrorBtn from '../../components/ThrowErrorBtn/ThrowErrorBtn';
import Pagination from '../../components/Pagination/Pagination';

export const BASE_URL = 'https://rickandmortyapi.com/api/character';

const Home: FC = () => {
  const [totalPages] = useState(0);
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
      setUrlValue('');
      return;
    }
    navigate({
      pathname: '/',
      search: `?page=${currentPage}`,
    });
    setUrlValue(`?page=${currentPage}`);
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
        <div className="main">
          <div className="main__list">
            <CardList urlValue={urlValue} />
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
