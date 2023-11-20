import { act, render, screen } from '@testing-library/react';

import Error from './Error';

describe('Error Page', () => {
  test('should render correctly', async () => {
    act(() => {
      render(<Error />);
    });
    const errorText = screen.getByText('Oops!');
    expect(errorText).toBeDefined();
  });
});
