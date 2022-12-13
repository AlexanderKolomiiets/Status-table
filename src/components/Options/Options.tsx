/* eslint-disable @typescript-eslint/no-var-requires */

import { useNavigate } from 'react-router-dom';
import styles from './Options.module.scss';

const editIcon = require('../../images/edit.png');
const saveIcon = require('../../images/save.png');
const deleteIcon = require('../../images/delete.png');

export const Options: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.options}>
      <label
        htmlFor="edit"
        className={styles.option}
        onClick={() => navigate('/form')}
        role="presentation"
      >
        <img
          src={editIcon}
          alt="edit"
          id="edit"
          style={{ marginRight: '20px' }}
        />
        Редагувати
      </label>
      <label htmlFor="edit" className={styles.option}>
        <img
          src={saveIcon}
          alt="save"
          id="save"
          style={{ marginRight: '20px' }}
        />
        Зберегти
      </label>
      <label htmlFor="edit" className={styles.option}>
        <img
          src={deleteIcon}
          alt="delete"
          id="delete"
          style={{ marginRight: '20px' }}
        />
        Видалити
      </label>
    </div>
  );
};
