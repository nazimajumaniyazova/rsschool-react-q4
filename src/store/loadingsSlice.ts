import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';


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

export const { setCardListLoading, setCardDetailLoading } = loadingsSlice.actions;
export const searchSelector = (state: RootState) => state.searchReducer;
export default loadingsSlice.reducer;