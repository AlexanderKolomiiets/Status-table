/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable @typescript-eslint/no-var-requires */

import users from '../../api/users';
import 'bulma/css/bulma.min.css';

const more = require('../../images/more.png');

export const Table: React.FC = () => {
  return (
    <div className="container">
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th />
            <th
              style={{ color: '#ADB5BD', fontWeight: 500 }}
            >
              Назва
            </th>
            <th
              style={{ color: '#ADB5BD', fontWeight: 500 }}
            >
              URL
            </th>
            <th
              style={{ color: '#ADB5BD', fontWeight: 500 }}
            >
              Автор
            </th>
            <th
              style={{ color: '#ADB5BD', fontWeight: 500 }}
            >
              Створено
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <th>
                <span style={{ cursor: 'pointer' }}>
                  <img src={more} alt="more" />
                </span>
              </th>
              <th style={{ fontWeight: 500 }}>{user.name}</th>
              <th style={{ fontWeight: 400 }}>{user.url}</th>
              <th style={{ fontWeight: 400 }}>{user.author}</th>
              <th style={{ fontWeight: 400 }}>
                {user.date}
                <br />
                {user.time}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
