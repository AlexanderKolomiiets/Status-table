/* eslint-disable @typescript-eslint/no-var-requires */
import { useState } from 'react';
import data from '../../api/users';
import 'bulma/css/bulma.min.css';
import Options from '../Options';

const more = require('../../images/more.png');

export const Table: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const users = [...data];

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
          {users.map(({
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
    </div>
  );
};
