import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import SearchBar from './SearchBar';
import { Provider } from 'react-redux';
import searchReducer from '../../store/searchSlice';
import { configureStore } from '@reduxjs/toolkit';

describe('SearchBar', () => {
  test('should render initial state correctly', () => {
    const store = configureStore({
      reducer: {
        searchReducer,
      },
    });
    render(<SearchBar onSearch={() => {}} />, {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    const searchBarInput = screen.getByRole('textbox');
    expect(searchBarInput).toBeInTheDocument();
    expect(searchBarInput).toHaveValue('');
  });

  test('should call `onSearch` callback on Enter key press', async () => {
    const store = configureStore({
      reducer: {
        searchReducer,
      },
    });
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />, {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    const searchBarInput = await waitFor(
      () => screen.queryByPlaceholderText('Search') as HTMLInputElement
    );

    const newValue = 'Rick Sanchez';
    userEvent.type(searchBarInput, newValue);
    fireEvent.keyDown(searchBarInput, { key: 'Enter' });

    expect(mockOnSearch.mock.calls).toHaveLength(1);
  });
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
