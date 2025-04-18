'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Location, Logo } from '@/components/shared';
import { PersonSvg } from '@/components/svgs';
import BulletinNav from './BulletinNav';
import ServiceCenterNav from './ServiceCenterNav';

import menuData from '@/public/data/nav/menu.json';

import styles from './style.module.scss';

const Header = () => {
  const [isActiveMenuLink, setIsActiveMenuLink] = useState<0 | 1 | 2 | 3>(0);

  return (
    <header className={styles.header}>
      <div className={styles.header__line} />
      <div className="container">
        <div className={styles.header__top}>
          <div className={styles.header__top__left}>
            <div className={styles.header__top__logo}>
              <Logo />
            </div>
            <nav className={styles.menu}>
              <ul className={styles.menu__list}>
                <li className={styles.menu__list__item}>
                  <Link
                    className={`${styles.menu__list__item__link} ${
                      isActiveMenuLink === 0 ? styles.menu__list__item__link__active : ''
                    }`}
                    onClick={() => setIsActiveMenuLink(0)}
                    href={menuData.bulletin_board.href}
                  >
                    {menuData.bulletin_board.title}
                  </Link>
                </li>
                <li className={styles.menu__list__item}>
                  <Link
                    className={`${styles.menu__list__item__link} ${
                      isActiveMenuLink === 1 ? styles.menu__list__item__link__active : ''
                    }`}
                    onClick={() => setIsActiveMenuLink(1)}
                    href={menuData.service_center.href}
                  >
                    {menuData.service_center.title}
                  </Link>
                </li>
                <li className={styles.menu__list__item}>
                  <Link
                    className={`${styles.menu__list__item__link} ${
                      isActiveMenuLink === 2 ? styles.menu__list__item__link__active : ''
                    }`}
                    onClick={() => setIsActiveMenuLink(2)}
                    href={menuData.internet_store.href}
                  >
                    {menuData.internet_store.title}
                  </Link>
                </li>
                <li className={styles.menu__list__item}>
                  <Link
                    className={`${styles.menu__list__item__link} ${
                      isActiveMenuLink === 3 ? styles.menu__list__item__link__active : ''
                    }`}
                    onClick={() => setIsActiveMenuLink(3)}
                    href={menuData.purchase.href}
                  >
                    {menuData.purchase.title}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles.header__top__right}>
            <div className={styles.header__top__location}>
              <Location />
            </div>
            <div className={styles.header__top__auth}>
              <button className={styles.header__top__auth__btn}>
                <PersonSvg />
                Вход / регистрация
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header__bottom__wrapper}>
        <div className={`container ${styles.header__bottom}`}>
          {isActiveMenuLink === 0 && <BulletinNav />}
          {isActiveMenuLink === 1 && <ServiceCenterNav />}
        </div>
      </div>
    </header>
  );
};

export default Header;
