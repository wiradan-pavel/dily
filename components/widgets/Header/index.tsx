"use client";
import { useState } from "react";
import Link from "next/link";
import { Location, Logo } from "@/components/shared";
import { PersonSvg } from "@/components/svgs";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// navs
import BulletinNav from "./BulletinNav";
import ServiceCenterNav from "./ServiceCenterNav";
import InternetStoreNav from "./InternetStoreNav";
import PurchaseNav from "./PurchaseNav";

import menuData from "@/public/data/nav/header/header.json";

import styles from "./style.module.scss";
import MobileBurgerMenu from "./MobileBurgerMenu";

const Header = () => {
  const [activeMenuLink, setActiveMenuLink] = useState<0 | 1 | 2 | 3>(0);
  const [openMobileBurgerMenu, setOpenMobileBurgerMenu] = useState(false);

  const isMediaXL = useMediaQuery(1200);
  const isMediaLG = useMediaQuery(992);
  const isMediaMD = useMediaQuery(768);

  return (
    <header>
      <div className={styles.line} />
      <div className="container">
        <div className={styles.main}>
          <div className={styles.main__content}>
            <div className={styles.main__content__logo}>
              <Logo />
            </div>
            <nav>
              {openMobileBurgerMenu && (
                <MobileBurgerMenu
                  activeMenuLink={activeMenuLink}
                  setActiveMenuLink={setActiveMenuLink}
                />
              )}
              {!isMediaMD && (
                <ul className={styles.main__content__list}>
                  <li className={styles.main__content__list__item}>
                    <Link
                      className={`${styles.main__content__list__item__link} ${
                        activeMenuLink === 0
                          ? styles.main__content__list__item__link__active
                          : ""
                      }`}
                      onClick={() => setActiveMenuLink(0)}
                      href={menuData.bulletin_board.href}
                    >
                      {menuData.bulletin_board.title}
                    </Link>
                  </li>
                  <li className={styles.main__content__list__item}>
                    <Link
                      className={`${styles.main__content__list__item__link} ${
                        activeMenuLink === 1
                          ? styles.main__content__list__item__link__active
                          : ""
                      }`}
                      onClick={() => setActiveMenuLink(1)}
                      href={menuData.service_center.href}
                    >
                      {menuData.service_center.title}
                    </Link>
                  </li>
                  <li className={styles.main__content__list__item}>
                    <Link
                      className={`${styles.main__content__list__item__link} ${
                        activeMenuLink === 2
                          ? styles.main__content__list__item__link__active
                          : ""
                      }`}
                      onClick={() => setActiveMenuLink(2)}
                      href={menuData.internet_store.href}
                    >
                      {menuData.internet_store.title}
                    </Link>
                  </li>
                  <li className={styles.main__content__list__item}>
                    <Link
                      className={`${styles.main__content__list__item__link} ${
                        activeMenuLink === 3
                          ? styles.main__content__list__item__link__active
                          : ""
                      }`}
                      onClick={() => setActiveMenuLink(3)}
                      href={menuData.purchase.href}
                    >
                      {menuData.purchase.title}
                    </Link>
                  </li>
                </ul>
              )}
            </nav>
          </div>
          <div className={styles.main__actions}>
            {!isMediaXL && <Location />}
            {isMediaMD && (
              <div
                onClick={() => setOpenMobileBurgerMenu(!openMobileBurgerMenu)}
                className={`${styles.main__actions__burger} ${
                  openMobileBurgerMenu
                    ? styles.main__actions__burger__active
                    : ""
                }`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            <div className={styles.main__actions__auth}>
              <button className={styles.main__actions__auth__btn} title="login">
                <PersonSvg />
                {!isMediaLG && "Вход / регистрация"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.nav}>
        <div className="container">
          {activeMenuLink === 0 && <BulletinNav />}
          {activeMenuLink === 1 && <ServiceCenterNav />}
          {activeMenuLink === 2 && <InternetStoreNav />}
          {activeMenuLink === 3 && <PurchaseNav />}
        </div>
      </div>
    </header>
  );
};

export default Header;
