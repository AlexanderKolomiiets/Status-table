/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import styles from './ModalForm.module.scss';
import 'react-phone-input-2/lib/style.css';
import 'bulma/css/bulma.min.css';

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
    setTitle('');
    setPhone('');
    setGroup('');
    setName('');
    setEmail('');
    setField('');
    setLang('');
    setFieldValue('');
    navigate('/');
  };

  return (
    <div className={styles.form}>
      <div className={styles.add}>
        <header className={`${styles.add__header} ${styles.header}`}>
          <div className={styles.header__name}>
            <p className={styles.header__plus}>+</p>
            Редагувати сутність
          </div>
          <button
            type="submit"
            onClick={() => navigate('/')}
            className="delete"
            style={{ marginRight: '20px' }}
          >
            X
          </button>
        </header>
        <form className={styles.main} onSubmit={handleSubmit}>
          <div className={styles.main__column}>
            <label className={styles.label} htmlFor="title">
              Назва
              <input
                type="text"
                placeholder="Статус посилки"
                id="title"
                className={styles.inputCustom}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </label>

            <label className={styles.label}>
              Номер телефону
              <PhoneInput
                country="ua"
                defaultMask="(...) ...-...."
                value={phone}
                onChange={() => setPhone(phone)}
                inputStyle={{
                  border: '1px solid rgba(234, 242, 255, 1)',
                  width: '275px',
                  height: '40px',
                }}
              />
            </label>

            <label className={styles.label} htmlFor="group">
              Група користувачів
              <div className={styles.select} id="group">
                <select
                  value={group}
                  className={styles.inputCustom}
                  onChange={(event) => setGroup(event.target.value)}
                  required
                >
                  <option className={styles.inputCustom}>Оберіть групу</option>
                  <option className={styles.inputCustom}>Group 1</option>
                  <option className={styles.inputCustom}>Group 2</option>
                </select>
              </div>
            </label>

            <label className={styles.label} htmlFor="field">
              Додати нове поле
              <div className={styles.select} id="field">
                <select
                  className={styles.inputCustom}
                  value={field}
                  onChange={(event) => setField(event.target.value)}
                  required
                >
                  <option>заголовок</option>
                  <option>текст</option>
                  <option>текст</option>
                  <option>текст</option>
                </select>
              </div>
            </label>
          </div>
          <div className={styles.main__column}>
            <label className={styles.label} htmlFor="name">
              Ім&#39;я та фамілія
              <input
                type="text"
                placeholder="Через пробіл"
                id="name"
                className={styles.inputCustom}
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>
            <label className={styles.label} htmlFor="email">
              Email
              <input
                type="email"
                placeholder="example.com"
                id="email"
                className={styles.inputCustom}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
            <label className={styles.label} htmlFor="lang">
              Мова
              <div className={styles.select} id="lang">
                <select
                  className={styles.inputCustom}
                  value={lang}
                  onChange={(event) => setLang(event.target.value)}
                  required
                >
                  <option>Оберіть мову</option>
                  <option>Українська</option>
                  <option>Англійська</option>
                </select>
              </div>
            </label>
            <label
              className={styles.label}
              htmlFor="fieldValue"
              style={{ marginBottom: '100px' }}
            >
              Значення поля
              <input
                className={styles.inputCustom}
                placeholder="Введіть значення"
                id="fieldValue"
                type="text"
                value={fieldValue}
                onChange={(event) => setFieldValue(event.target.value)}
                required
              />
            </label>
            <button
              className={`${styles.buttonCustom} button is-info is-outlined`}
              type="submit"
              // disabled={!allInput}
            >
              Додати користувача
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
