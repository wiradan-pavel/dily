"use client";
import { useState } from "react";
import Link from "next/link";
import { BurgerBtn, Button, SearchForm } from "@/components/shared";
import {
  AddSvg,
  BulletinNavAnnouncementSvg,
  BulletinNavStoresSvg,
  BulletinNavCharitySvg,
} from "@/components/svgs";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Menu from "./Menu";

import bulletinBoardData from "@/public/data/nav/header/bulletin_board.json";

import styles from "./style.module.scss";

const BulletinNav = () => {
  const [activeBulletinPage, setActiveBulletinPage] = useState<0 | 1 | 2>(0);
  const [openMenu, setOpenMenu] = useState(false);

  const isMediaXL = useMediaQuery(1200);
  const isMediaMD = useMediaQuery(768);
  const isMediaSM = useMediaQuery(576);

  return (
    <div className={styles.bulletin}>
      {openMenu && <Menu />}
      <nav>
        <ul className={styles.bulletin__list}>
          <li className={styles.bulletin__list__item}>
            <BurgerBtn openMenu={openMenu} setOpenMenu={setOpenMenu} />
          </li>
          <li
            className={`${styles.bulletin__list__item} ${
              activeBulletinPage === 0
                ? styles.bulletin__list__item__active
                : ""
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
          {!isMediaSM && (
            <li
              className={`${styles.bulletin__list__item} ${
                activeBulletinPage === 1
                  ? styles.bulletin__list__item__active
                  : ""
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
          )}
          {!isMediaMD && (
            <li
              className={`${styles.bulletin__list__item} ${
                activeBulletinPage === 2
                  ? styles.bulletin__list__item__active
                  : ""
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
          )}
        </ul>
      </nav>
      <div className={styles.bulletin__actions}>
        {!isMediaXL && <SearchForm />}
        <Button
          text="Подать объявление"
          style="green"
          paddingX={isMediaSM ? "8px" : "25px"}
          paddingY="6px"
          borderRadius={18}
        >
          <Link href="/" />
          {!isMediaSM && <AddSvg />}
        </Button>
      </div>
    </div>
  );
};

export default BulletinNav;
