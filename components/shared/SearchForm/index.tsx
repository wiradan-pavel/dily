'use client';
import { useState } from 'react';
import { SearchSvg } from '@/components/svgs';

import styles from './style.module.scss';

const SearchForm = () => {
  const [inputText, setInputText] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <form className={`${styles.form} ${inputText === '' ? '' : styles.form__active}`}>
      <input
        className={styles.form__input}
        onChange={handleInput}
        type="text"
        placeholder="Я хочу купить"
      />
      <button className={styles.form__btn}>Найти</button>
      <SearchSvg />
    </form>
  );
};

export default SearchForm;
