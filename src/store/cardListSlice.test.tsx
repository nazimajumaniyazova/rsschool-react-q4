import { api } from './cardListSlice';

describe('cardListSlice', () => {
  test('should create api object with expected properties', () => {
    expect(api).toHaveProperty('reducerPath');
    expect(api).toHaveProperty('endpoints');
  });

  test('should create cardList endpoint with expected properties', () => {
    expect(api.endpoints.cardList).toHaveProperty('useQuery');
    expect(api.endpoints.cardList.useQuery).toBeInstanceOf(Function);
  });
});
