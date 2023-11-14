import {
  FC,
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { ICard } from '../type/ICard';

interface IProps {
  children: ReactNode;
}

export type cardListContextType = {
  cards: Array<ICard>;
  setCards: Dispatch<SetStateAction<Array<ICard>>>;
};

export const cardListContext = createContext<cardListContextType | null>(null);

export const CardListContextProvider: FC<IProps> = ({ children }) => {
  const [cards, setCards] = useState<Array<ICard>>([]);

  return (
    <cardListContext.Provider value={{ cards: cards, setCards: setCards }}>
      {children}
    </cardListContext.Provider>
  );
};
