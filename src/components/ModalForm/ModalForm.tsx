/* eslint-disable @typescript-eslint/no-var-requires */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import styles from './ModalForm.module.scss';
import 'react-phone-input-2/lib/style.css';
import 'bulma/css/bulma.min.css';

const cross = require('../../images/cross.png');

export const ModalForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [group, setGroup] = useState('');
  const [field, setField] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [lang, setLang] = useState('');
  const [fieldValue, setFieldValue] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <div className={styles.modal}>
      <div className={styles.form}>
        <header className={styles.form__header}>
          <div style={{ display: 'flex' }}>
            <img src={cross} alt="delete" style={{ margin: '0 12px' }} />
            Редагувати сутність
          </div>
          <button
            aria-label="delete-button"
            type="submit"
            onClick={() => navigate('/')}
            className="delete"
            style={{ marginRight: '20px' }}
          />
        </header>
        <form className={styles.grid} onSubmit={handleSubmit}>
          <div className={styles.grid__column}>
            <label className={styles.form__label} htmlFor="title">
              Назва
              <input
                type="text"
                placeholder="Статус посилки"
                id="title"
                className={styles.form__input}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </label>

            <span className={styles.form__label}>
              Номер телефону
              <PhoneInput
                country="ua"
                placeholder="1 (999) 999-9999"
                defaultMask="(...) ...-...."
                inputStyle={{
                  border: '1px solid #eaf2ff',
                  width: '275px',
                  height: '40px',
                }}
                value={phone}
                onChange={() => setPhone(phone)}
              />
            </span>

            <label className={styles.form__label} htmlFor="group">
              Група користувачів
              <select
                value={group}
                id="group"
                className={styles.form__input}
                onChange={(event) => setGroup(event.target.value)}
                required
              >
                <option className={styles.form__input}>Оберіть групу</option>
                <option className={styles.form__input}>Адміністратори</option>
                <option className={styles.form__input}>Клієнти</option>
              </select>
            </label>

            <label className={styles.form__label} htmlFor="field">
              Додати нове поле
              <select
                className={styles.form__input}
                id="field"
                value={field}
                onChange={(event) => setField(event.target.value)}
                required
              >
                <option>Заголовок</option>
                <option>Текст</option>
                <option>Текст</option>
                <option>Текст</option>
              </select>
            </label>
          </div>
          <div className={styles.grid__column}>
            <label className={styles.form__label} htmlFor="name">
              Ім&#39;я та фамілія
              <input
                type="text"
                placeholder="Через пробіл"
                id="name"
                className={styles.form__input}
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>
            <label className={styles.form__label} htmlFor="email">
              Email
              <input
                type="email"
                placeholder="example.com"
                id="email"
                className={styles.form__input}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
            <label className={styles.form__label} htmlFor="lang">
              Мова
              <select
                className={styles.form__input}
                id="lang"
                value={lang}
                onChange={(event) => setLang(event.target.value)}
                required
              >
                <option>Оберіть мову</option>
                <option>Українська</option>
                <option>English</option>
                <option>Français</option>
              </select>
            </label>
            <label
              className={styles.form__label}
              htmlFor="fieldValue"
              style={{ marginBottom: '120px' }}
            >
              Значення поля
              <input
                className={styles.form__input}
                placeholder="Введіть значення"
                id="fieldValue"
                type="text"
                value={fieldValue}
                onChange={(event) => setFieldValue(event.target.value)}
                required
              />
            </label>
            <button
              className={`${styles.form__button} button is-outlined`}
              type="submit"
            >
              Додати користувача
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
