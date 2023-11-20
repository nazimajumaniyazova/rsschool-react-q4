import { loadingsSlice, setCardListLoading } from './loadingsSlice';

test('The initial state of the loadingsSlice should have cardListLoading set to false', () => {
  expect(loadingsSlice.getInitialState().cardDetailLoading).toBeFalsy();
});

test('The initial state of the loadingsSlice should have cardDetailLoading set to false', () => {
  expect(loadingsSlice.getInitialState().cardListLoading).toBeFalsy();
});

test('The setCardListLoading action should update cardListLoading to the provided payload', () => {
  const state = loadingsSlice.getInitialState();
  const payload = true;

  const newState = loadingsSlice.reducer(state, setCardListLoading(payload));
  expect(newState.cardListLoading).toBe(payload);
});
