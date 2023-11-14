import { type FC, useContext } from 'react';
import './SearchBar.scss';
import { SearchContextType, searchContext } from '../../context/searchContext';

interface IProps {
  onSearch: (name: string) => void;
}

const SearchBar: FC<IProps> = ({ onSearch }) => {
  const { searchValue, setSearchValue } = useContext(
    searchContext
  ) as SearchContextType;

  // const [value, setValue] = useState<string>(
  //   localStorage.getItem('inputValue') || ''
  // );

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(searchValue);
      localStorage.setItem('inputValue', searchValue);
    }
  };

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    localStorage.setItem('inputValue', searchValue);
    onSearch(searchValue);
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
