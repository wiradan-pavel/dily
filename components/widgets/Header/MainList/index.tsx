import Link from "next/link";
import { UseState } from "@/types/common";

import menuData from "@/public/data/nav/header/header.json";

import styles from "./style.module.scss";

const MainList = ({
  activeMenuLink,
  setActiveMenuLink,
}: {
  activeMenuLink: 0 | 1 | 2 | 3;
  setActiveMenuLink: UseState<0 | 1 | 2 | 3>;
}) => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        <Link
          className={`${styles.list__item__link} ${
            activeMenuLink === 0 ? styles.list__item__link__active : ""
          }`}
          onClick={() => setActiveMenuLink(0)}
          href={menuData.bulletin_board.href}
        >
          {menuData.bulletin_board.title}
        </Link>
      </li>
      <li className={styles.list__item}>
        <Link
          className={`${styles.list__item__link} ${
            activeMenuLink === 1 ? styles.list__item__link__active : ""
          }`}
          onClick={() => setActiveMenuLink(1)}
          href={menuData.service_center.href}
        >
          {menuData.service_center.title}
        </Link>
      </li>
      <li className={styles.list__item}>
        <Link
          className={`${styles.list__item__link} ${
            activeMenuLink === 2 ? styles.list__item__link__active : ""
          }`}
          onClick={() => setActiveMenuLink(2)}
          href={menuData.internet_store.href}
        >
          {menuData.internet_store.title}
        </Link>
      </li>
      <li className={styles.list__item}>
        <Link
          className={`${styles.list__item__link} ${
            activeMenuLink === 3 ? styles.list__item__link__active : ""
          }`}
          onClick={() => setActiveMenuLink(3)}
          href={menuData.purchase.href}
        >
          {menuData.purchase.title}
        </Link>
      </li>
    </ul>
  );
};

export default MainList;
