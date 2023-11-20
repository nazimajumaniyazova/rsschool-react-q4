import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";


export interface Search {
  inputValue: string;
  isLoading: boolean;
}
const initialState: Search = {
  inputValue: localStorage.getItem('inputValue') || '',
  isLoading: false,

}
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    save: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
      localStorage.setItem('inputValue', action.payload);
    },

  },
});

export const { save } = searchSlice.actions;
export const searchSelector = (state: RootState) => state.searchReducer;
export default searchSlice.reducer;