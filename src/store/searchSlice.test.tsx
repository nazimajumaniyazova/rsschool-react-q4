import { configureStore } from '@reduxjs/toolkit';
import searchReducer, { save } from './searchSlice';

describe('Search slice', () => {
  it('should save the input value to the store and localStorage', () => {
    const store = configureStore({
      reducer: {
        searchReducer,
      },
    });

    const inputValue = 'test';

    store.dispatch(save(inputValue));

    const state = store.getState();
    expect(state.searchReducer.inputValue).toBe(inputValue);
    expect(localStorage.getItem('inputValue')).toBe(inputValue);
  });
});
