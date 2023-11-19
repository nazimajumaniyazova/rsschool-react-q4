import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import SearchBar from './SearchBar';
import { Provider } from 'react-redux';
import searchReducer from '../../store/searchSlice';
import { configureStore } from '@reduxjs/toolkit';

describe('SearchBar', () => {
  test('should save the entered search term to local storage', async () => {
    const store = configureStore({
      reducer: {
        searchReducer,
      },
    });
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />, {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    const inputField = await waitFor(
      () => screen.queryByPlaceholderText('Search') as HTMLInputElement
    );
    userEvent.type(inputField, 'test');

    const searchButton = screen.getByRole('button', {
      name: /Search/i,
    });

    userEvent.click(searchButton);
    const m = new Promise((resolve) => setTimeout(resolve, 5000));
    m.then(() => {
      const storedSearchTerm = localStorage.getItem('inputValue');
      expect(storedSearchTerm).toBe('test');
    });
  });
});
