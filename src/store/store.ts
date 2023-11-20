import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice'
import { api } from './cardListSlice';

export const store = configureStore({
  reducer: {
    searchReducer,
    [api.reducerPath]: api.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;