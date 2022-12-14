/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import 'bulma/css/bulma.min.css';
import { useState } from 'react';
import classNames from 'classnames';

type Props = {
  usersPerPage: number;
  totalUsers: number;
  paginate: (pageNumber: number) => void;
  previousPage: () => void;
  nextPage: () => void;
};

export const Pagination: React.FC<Props> = ({
  usersPerPage,
  totalUsers,
  paginate,
  previousPage,
  nextPage,
}) => {
  const [active, setActive] = useState<number>(1);
  const pageNumbers = [];

  const handleActive = (number: number) => {
    setActive(number);
    paginate(number);
  };

  const handlePrev = () => {
    previousPage();
    if (active > 1) {
      setActive(prev => prev -= 1);
    }
  };

  const handleNext = () => {
    nextPage();
    if (active < pageNumbers.length) {
      setActive(prev => prev += 1);
    }
  };

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <li
        onClick={handlePrev}
        className="pagination-previous"
        style={{ cursor: 'pointer' }}
        role="presentation"
      >
        Prev
      </li>
      <li
        onClick={handleNext}
        className="pagination-next"
        style={{ cursor: 'pointer' }}
        role="presentation"
      >
        Next
      </li>
      <ul className="pagination-list">
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => handleActive(number)}
            className={classNames(
              'pagination-link',
              { 'is-current': number === active },
            )}
            style={{ cursor: 'pointer' }}
            role="presentation"
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};
