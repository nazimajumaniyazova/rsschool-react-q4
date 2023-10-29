import { ICard } from "../components/Card/Card";

export interface IResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Array<ICard>;
}
