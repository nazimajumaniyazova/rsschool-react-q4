import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICard } from '../type/ICard';

export interface CardList {
  info: {
    count: number,
    next: string | null
    pages: number
    prev: null | number
  }
  results: Array<ICard>;
}

export interface CardDetail {
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
export const api = createApi({
  reducerPath: 'cardList',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  endpoints: (build) => ({
    cardList: build.query<CardList, { pageNumber: number, searchValue: string }>({
      query: ({ pageNumber, searchValue }) => ({
        url: 'character',
        params: {
          page: pageNumber,
          name: searchValue
        }
      }),
    }),
    cardDetail: build.query<CardDetail, { id: string | undefined }>({
      query: ({ id }) => ({
        url: `character/${id}`,
      }),
    }),
  }),

});


export const { useCardListQuery, useCardDetailQuery } = api;
