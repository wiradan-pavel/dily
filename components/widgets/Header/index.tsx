import { Logo } from '@/components/shared';
import styles from './style.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__line} />
      <div className="container">
        <div className={styles.header__top}>
          <div className={styles.header__top__logo}>
            <Logo />
          </div>
        </div>
      </div>
      <div className={styles.header__bottom__wrapper}>
        <div className={`container ${styles.header__bottom}`}>Hello</div>
      </div>
    </header>
  );
};

export default Header;
