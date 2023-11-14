import './CardDetail.scss';

import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../pages/home/Home';

type cardDetailType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  episode: Array<string>;
  image: string;
  url: string;
  created: string;
};
const CardDetail: FC = () => {
  const navigate = useNavigate();
  const { pathname, state } = useLocation();

  const id = pathname.match(/\d/g)?.join('');

  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const [detail, setDetail] = useState<cardDetailType | null>(null);

  const fetchData = async (url: string) => {
    setIsLoading(true);
    setDetail(null);
    setErr('');
    const res: Response = await fetch(url);

    const data = await res.json();
    if (res.status !== 200) {
      setIsLoading(false);
      setDetail(null);
      setErr(data.error);
      return;
    }
    setIsLoading(false);
    setDetail(data);
    setErr('');
  };

  useEffect(() => {
    fetchData(BASE_URL + `/${id}`);
  }, [id]);

  const handleClose = () => {
    navigate({
      pathname: '/',
      search: state.path,
    });
  };
  return (
    <div className="card-detail">
      {isLoading && <p className="loading">Loading...</p>}
      {err && <p className="loading">{err}</p>}
      {detail && (
        <div className="card">
          <div className="card-img">
            <img
              src={detail.image}
              alt={detail.name}
              className="card-img__image"
            />
          </div>
          <div className="card-info">
            <p className="card-name">Name: {detail.name}</p>
            <p className="card-score">Status: {detail.status}</p>
            <p className="card-score">EPISODES: {detail.episode.length}</p>
            <p className="card-date">Species: {detail.species}</p>
            <p className="card-score">Gender: {detail.gender}</p>
            <p className="card-score">ORIGIN: {detail.origin.name}</p>
            <p className="card-score">LOCATION: {detail.location.name}</p>
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
