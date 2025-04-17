import { useState } from 'react';
import Link from 'next/link';
import { Button, SearchForm } from '@/components/shared';
import {
  AddSvg,
  BulletinNavAnnouncementSvg,
  BulletinNavStoresSvg,
  BulletinNavCharitySvg,
} from '@/components/svgs';

import bulletinBoardData from '@/public/data/nav/bulletin_board.json';

import styles from './style.module.scss';

const BulletinNav = () => {
  const [activeBulletinPage, setActiveBulletinPage] = useState<0 | 1 | 2>(0);
  const [openCategoryMenu, setOpenCategoryMenu] = useState(false);

  return (
    <div className={styles.bulletin}>
      <div className={styles.bulletin__left}>
        <button
          onClick={() => setOpenCategoryMenu(!openCategoryMenu)}
          className={`${styles.bulletin__category} ${
            openCategoryMenu ? styles.bulletin__category__open : ''
          }`}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={styles.bulletin__nav}>
          <ul className={styles.bulletin__nav__list}>
            <li
              className={`${styles.bulletin__nav__list__item} ${
                activeBulletinPage === 0 ? styles.bulletin__nav__list__item__active : ''
              }`}
            >
              <Link
                onClick={() => setActiveBulletinPage(0)}
                href={bulletinBoardData.announcement.href}
                className={styles.bulletin__nav__list__item__link}
              >
                <BulletinNavAnnouncementSvg />
                {bulletinBoardData.announcement.title}
              </Link>
            </li>
            <li
              className={`${styles.bulletin__nav__list__item} ${
                activeBulletinPage === 1 ? styles.bulletin__nav__list__item__active : ''
              }`}
            >
              <Link
                onClick={() => setActiveBulletinPage(1)}
                href={bulletinBoardData.stores.href}
                className={styles.bulletin__nav__list__item__link}
              >
                <BulletinNavStoresSvg />
                {bulletinBoardData.stores.title}
              </Link>
            </li>
            <li
              className={`${styles.bulletin__nav__list__item} ${
                activeBulletinPage === 2 ? styles.bulletin__nav__list__item__active : ''
              }`}
            >
              <Link
                onClick={() => setActiveBulletinPage(2)}
                href={bulletinBoardData.charity.href}
                className={styles.bulletin__nav__list__item__link}
              >
                <BulletinNavCharitySvg />
                {bulletinBoardData.charity.title}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.bulletin__right}>
        <SearchForm />

        <Button text="Подать объявление" style="green" paddingX={25} paddingY={6} borderRadius={18}>
          <Link href="/" />
          <AddSvg />
        </Button>
      </div>
    </div>
  );
};

export default BulletinNav;
