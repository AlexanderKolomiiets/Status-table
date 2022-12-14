/* eslint-disable @typescript-eslint/no-var-requires */
import { useState } from 'react';
import data from '../../api/users';
import 'bulma/css/bulma.min.css';
import Options from '../Options';
import Pagination from '../Pagination';

const more = require('../../images/more.png');

export const Table: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(6);
  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const visibleUsers = data.slice(indexOfFirstPost, indexOfLastPost);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(data.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleModal = (id: number) => {
    setSelectedId(id);
  };

  const tableStyles = {
    border: '1px solid #EAF2FF',
    boxShadow: '0px 4px 20px 0px #eaf2ff',
  };

  const headStyles = {
    color: '#ADB5BD',
    fontWeight: 500,
  };

  return (
    <div className="container">
      <table
        className="table is-fullwidth"
        style={tableStyles}
      >
        <thead>
          <tr>
            <th aria-label="more-column" />
            <th style={headStyles}>
              Назва
            </th>
            <th style={headStyles}>
              URL
            </th>
            <th style={headStyles}>
              Автор
            </th>
            <th style={headStyles}>
              Створено
            </th>
          </tr>
        </thead>
        <tbody>
          {visibleUsers.map(({
            id, name, url, author, date, time,
          }) => (
            <tr>
              <th>
                {selectedId === id
                  && (
                    <Options />
                  )}
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleModal(id)}
                  role="presentation"
                >
                  <img src={more} alt="more" />
                </span>
              </th>
              <th style={{ fontWeight: 500 }}>{name}</th>
              <th style={{ fontWeight: 400 }}>{url}</th>
              <th style={{ fontWeight: 400 }}>{author}</th>
              <th style={{ fontWeight: 400 }}>
                {date}
                <br />
                {time}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={data.length}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </div>
  );
};
