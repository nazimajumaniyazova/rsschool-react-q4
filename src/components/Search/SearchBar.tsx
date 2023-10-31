import { useState, type FC } from 'react';
import './SearchBar.scss';

interface IProps {
  onSearch: (name: string) => void;
}

const SearchBar: FC<IProps> = ({ onSearch }) => {
  const [value, setValue] = useState<string>(
    localStorage.getItem('inputValue') || ''
  );

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(value);
      localStorage.setItem('inputValue', value);
    }
  };

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    localStorage.setItem('inputValue', value);
    onSearch(value);
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
            value={value}
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
