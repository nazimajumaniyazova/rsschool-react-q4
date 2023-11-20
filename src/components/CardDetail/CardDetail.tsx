import './CardDetail.scss';

import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useCardDetailQuery } from '../../store/cardListSlice';

const CardDetail: FC = () => {
  const navigate = useNavigate();
  const { pathname, state } = useLocation();

  const id = pathname.match(/\d/g)?.join('');
  const { data, isLoading, isError } = useCardDetailQuery({ id: id });

  const handleClose = () => {
    navigate({
      pathname: '/',
      search: state.path,
    });
  };
  return (
    <div className="card-detail">
      {isLoading && <p className="loading">Loading...</p>}
      {isError && <p className="loading">Smth went wrong</p>}
      {data && (
        <div className="card">
          <div className="card-img">
            <img src={data.image} alt={data.name} className="card-img__image" />
          </div>
          <div className="card-info">
            <p className="card-name">Name: {data.name}</p>
            <p className="card-score">Status: {data.status}</p>
            <p className="card-score">EPISODES: {data.episode.length}</p>
            <p className="card-date">Species: {data.species}</p>
            <p className="card-score">Gender: {data.gender}</p>
            <p className="card-score">ORIGIN: {data.origin.name}</p>
            <p className="card-score">LOCATION: {data.location.name}</p>
          </div>
        </div>
      )}
      {!isLoading && (
        <div className="close" onClick={handleClose}>
          <span className="close__icon"></span>
        </div>
      )}
    </div>
  );
};

export default CardDetail;
