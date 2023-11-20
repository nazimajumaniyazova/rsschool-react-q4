import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

const MyComponentWithError = () => {
  throw new Error('Something went wrong!');
};

test('should render fallback when error occurs', () => {
  render(
    <ErrorBoundary fallback={'Error: Something went wrong'}>
      <MyComponentWithError />
    </ErrorBoundary>
  );

  expect(screen.getByText('Error: Something went wrong')).toBeInTheDocument();
});

test('should render children when no error occurs', () => {
  render(
    <ErrorBoundary fallback={'Error: Something went wrong'}>
      <div>No error here</div>
    </ErrorBoundary>
  );

  expect(screen.getByText('No error here')).toBeInTheDocument();
});
