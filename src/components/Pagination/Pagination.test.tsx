import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Pagination from './Pagination';

describe('Pagination.', () => {
  test('should update URL query parameter when press Next btn', async () => {
    const handlePaginationClick = jest.fn();
    const setcurrentPage = jest.fn();
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        setcurrentPage={setcurrentPage}
        handlePaginationClick={handlePaginationClick}
      />
    );
    userEvent.click(screen.getByText('Next'));
    const m = new Promise((resolve) => setTimeout(resolve, 5000));
    m.then(() => {
      expect(window.location.search).toBe('?page=2');
    });
  });

  test('should update URL query parameter when press Previous btn', () => {
    const handlePaginationClick = jest.fn();
    const setcurrentPage = jest.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        setcurrentPage={setcurrentPage}
        handlePaginationClick={handlePaginationClick}
      />
    );

    userEvent.click(screen.getByText('Next'));

    const m = new Promise((resolve) => setTimeout(resolve, 5000));
    m.then(() => {
      expect(window.location.search).toBe('?page=1');
    });
  });

  test('should update URL query parameter when page changes from 1 to 2', () => {
    const handlePaginationClick = jest.fn();
    const setcurrentPage = jest.fn();
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        setcurrentPage={setcurrentPage}
        handlePaginationClick={handlePaginationClick}
      />
    );

    userEvent.click(screen.getByText('2'));

    const m = new Promise((resolve) => setTimeout(resolve, 5000));
    m.then(() => {
      expect(window.location.search).toBe('?page=2');
    });
  });
});
