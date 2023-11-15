import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import SearchBar from './SearchBar';
import { searchContext } from '../../context/searchContext';

describe('SearchBar', () => {
  test('should save the entered search term to local storage', async () => {
    const mockSearchContextValue = {
      searchValue: '',
      setSearchValue: jest.fn(),
    };
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />, {
      wrapper: ({ children }) => (
        <searchContext.Provider value={mockSearchContextValue}>
          {children}
        </searchContext.Provider>
      ),
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
