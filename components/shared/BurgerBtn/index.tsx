import { useState } from 'react';

import styles from './style.module.scss';

const BurgerBtn = () => {
  const [openCategoryMenu, setOpenCategoryMenu] = useState(false);

  return (
    <button
      onClick={() => setOpenCategoryMenu(!openCategoryMenu)}
      className={`${styles.burger} ${openCategoryMenu ? styles.burger__open : ''}`}
    >
      <span />
      <span />
      <span />
    </button>
  );
};

export default BurgerBtn;
