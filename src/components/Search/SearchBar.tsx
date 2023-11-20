import './SearchBar.scss';

import { type FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { save } from '../../store/searchSlice';

interface IProps {
  onSearch: (name: string) => void;
}

const SearchBar: FC<IProps> = ({ onSearch }) => {
  const dispatch = useAppDispatch();
  const { inputValue } = useAppSelector((state) => state.searchReducer);

  const [searchValue, setSearchValue] = useState(inputValue);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(searchValue);
      dispatch(save(searchValue));
    }
  };

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onSearch(searchValue);
    dispatch(save(searchValue));
  };

  return (
    <div className="search-bar-section">
      <div className="container centralize search-bar__wrapper">
        <p className="search-bar__title">Search by characters' name</p>
        <form className="search-bar" onSubmit={onSubmit}>
          <input
            type="text"
            className="search-bar__input"
            placeholder="Search"
            onInput={onInputChange}
            onKeyDown={onKeyDown}
            value={searchValue}
          />
          <button type="submit" className="search-bar__btn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
