import { useState, FC, Dispatch, SetStateAction, useEffect } from 'react';
import './Pagination.scss';

type PaginationType = {
  totalPages?: number;
  currentPage: number;
  setcurrentPage: Dispatch<SetStateAction<number>>;
  handlePaginationClick: (currentPage: number) => void;
};
const Pagination: FC<PaginationType> = ({
  totalPages,
  currentPage,
  setcurrentPage,
  handlePaginationClick,
}) => {
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    setcurrentPage(Number(target.id));
  };

  const pages = [];
  if (totalPages) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  }

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={`${number}`}
          onClick={(event) => handleClick(event)}
          className={`pagination__item ${
            currentPage == number ? 'active' : null
          }`}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);
    console.log(window.location.search);
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li className="pagination__item" onClick={handleNextbtn}>
        &hellip;{' '}
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li className="pagination__item" onClick={handlePrevbtn}>
        &hellip;{' '}
      </li>
    );
  }

  useEffect(() => {
    handlePaginationClick(currentPage);
  }, [currentPage]);
  return (
    <ul className="pagination">
      <li className="pagination__item ">
        <button
          onClick={handlePrevbtn}
          disabled={currentPage == pages[0] ? true : false}
        >
          Previous
        </button>
      </li>
      {pageDecrementBtn}
      {renderPageNumbers}
      {pageIncrementBtn}

      <li className="pagination__item">
        <button
          onClick={handleNextbtn}
          disabled={currentPage == pages[pages.length - 1] ? true : false}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
