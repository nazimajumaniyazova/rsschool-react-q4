import { act, render } from '@testing-library/react';

import Home from './Home';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../../store/searchSlice';
import { api } from '../../store/cardListSlice';
import { BrowserRouter } from 'react-router-dom';

describe('Home Page', () => {
  test('should render correctly', async () => {
    const store = configureStore({
      reducer: {
        searchReducer,
        [api.reducerPath]: api.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
    });
    act(() => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>,
        {
          wrapper: ({ children }) => (
            <Provider store={store}>{children}</Provider>
          ),
        }
      );
    });
  });
});
