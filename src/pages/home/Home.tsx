import './Home.scss';

import { FC, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/Search/SearchBar';
import ThrowErrorBtn from '../../components/ThrowErrorBtn/ThrowErrorBtn';
import Pagination from '../../components/Pagination/Pagination';
import { useCardListQuery } from '../../store/cardListSlice';

export const BASE_URL = 'https://rickandmortyapi.com/api/character';

const Home: FC = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const { data, isLoading, isError } = useCardListQuery({
    pageNumber: currentPage,
  });

  const [urlValue, setUrlValue] = useState('');

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

  if (isError) {
    return <p>Smth went wrong. Pleae try again</p>;
  }

  return (
    <>
      <ThrowErrorBtn />
      <header>
        <SearchBar onSearch={() => {}} />
      </header>
      <main>
        {isLoading && <p className="loading">Loading...</p>}
        <div className="main">
          <div className="main__list">
            {data?.results && (
              <CardList cards={data?.results} urlValue={urlValue} />
            )}
          </div>

          <div className="main__detail">
            <Outlet />
          </div>
        </div>

        <div className="pagination-wrap">
          <Pagination
            totalPages={data?.info?.pages}
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
