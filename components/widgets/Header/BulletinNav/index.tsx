'use client';
import { useState } from 'react';
import Link from 'next/link';
import { BurgerBtn, Button, SearchForm } from '@/components/shared';
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

  return (
    <div className={styles.bulletin}>
      <nav>
        <ul className={styles.bulletin__list}>
          <li className={styles.bulletin__list__item}>
            <BurgerBtn />
          </li>
          <li
            className={`${styles.bulletin__list__item} ${
              activeBulletinPage === 0 ? styles.bulletin__list__item__active : ''
            }`}
          >
            <Link
              onClick={() => setActiveBulletinPage(0)}
              href={bulletinBoardData.announcement.href}
              className={styles.bulletin__list__item__link}
            >
              <BulletinNavAnnouncementSvg />
              {bulletinBoardData.announcement.title}
            </Link>
          </li>
          <li
            className={`${styles.bulletin__list__item} ${
              activeBulletinPage === 1 ? styles.bulletin__list__item__active : ''
            }`}
          >
            <Link
              onClick={() => setActiveBulletinPage(1)}
              href={bulletinBoardData.stores.href}
              className={styles.bulletin__list__item__link}
            >
              <BulletinNavStoresSvg />
              {bulletinBoardData.stores.title}
            </Link>
          </li>
          <li
            className={`${styles.bulletin__list__item} ${
              activeBulletinPage === 2 ? styles.bulletin__list__item__active : ''
            }`}
          >
            <Link
              onClick={() => setActiveBulletinPage(2)}
              href={bulletinBoardData.charity.href}
              className={styles.bulletin__list__item__link}
            >
              <BulletinNavCharitySvg />
              {bulletinBoardData.charity.title}
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.bulletin__actions}>
        <SearchForm />
        <Button text="Подать объявление" style="green" paddingX='25px' paddingY='6px' borderRadius={18}>
          <Link href="/" />
          <AddSvg />
        </Button>
      </div>
    </div>
  );
};

export default BulletinNav;
