import {
  FC,
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

interface IProps {
  children: ReactNode;
}

export type SearchContextType = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export const searchContext = createContext<SearchContextType | null>(null);

export const SearchContextProvider: FC<IProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('inputValue') || ''
  );

  return (
    <searchContext.Provider
      value={{ searchValue: searchValue, setSearchValue: setSearchValue }}
    >
      {children}
    </searchContext.Provider>
  );
};
