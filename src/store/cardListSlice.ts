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
  }),

});


export const { useCardListQuery } = api;
