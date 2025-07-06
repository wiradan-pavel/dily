"use client";
import { useState } from "react";
import { Location, Logo } from "@/components/shared";
import { PersonSvg } from "@/components/svgs";

// navs
import BulletinNav from "./BulletinNav";
import ServiceCenterNav from "./ServiceCenterNav";
import InternetStoreNav from "./InternetStoreNav";
import PurchaseNav from "./PurchaseNav";

import MobileBurgerMenu from "./MobileBurgerMenu";

import styles from "./style.module.scss";
import MainList from "./MainList";

const Header = () => {
  const [activeMenuLink, setActiveMenuLink] = useState<0 | 1 | 2 | 3>(0);
  const [openMobileBurgerMenu, setOpenMobileBurgerMenu] = useState(false);

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
              <MainList
                activeMenuLink={activeMenuLink}
                setActiveMenuLink={setActiveMenuLink}
              />
            </nav>
          </div>
          <div className={styles.main__actions}>
            <div className={styles.main__actions__location}>
              <Location />
            </div>
            <div
              onClick={() => setOpenMobileBurgerMenu(!openMobileBurgerMenu)}
              className={`${styles.main__actions__burger} ${
                openMobileBurgerMenu ? styles.main__actions__burger__active : ""
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={styles.main__actions__auth}>
              <button className={styles.main__actions__auth__btn} title="login">
                <PersonSvg />
                <span>Вход / регистрация</span>
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
