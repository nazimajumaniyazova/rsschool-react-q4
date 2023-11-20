import { createSlice } from '@reduxjs/toolkit';


export interface loadingsSlice {
  cardListLoading: boolean,
  cardDetailLoading: boolean,
}
export const loadingsSlice = createSlice({
  name: 'users',
  initialState: {
    cardListLoading: false,
    cardDetailLoading: false,
  },
  reducers: {
    setCardListLoading: (state, { payload }) => {
      state.cardListLoading = payload;
    },
    setCardDetailLoading: (state, { payload }) => {
      state.cardDetailLoading = payload;
    },

  },
});
