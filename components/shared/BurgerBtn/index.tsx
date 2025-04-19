import { useState } from 'react';

import styles from './style.module.scss';

const BurgerBtn = () => {
  const [openCategoryMenu, setOpenCategoryMenu] = useState(false);

  return (
    <div
      onClick={() => setOpenCategoryMenu(!openCategoryMenu)}
      className={`${styles.burger} ${openCategoryMenu ? styles.burger__open : ''}`}
    >
      <span />
      <span />
      <span />
    </div>
  );
};

export default BurgerBtn;
