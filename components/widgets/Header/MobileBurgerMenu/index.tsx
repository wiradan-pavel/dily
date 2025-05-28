import Link from "next/link";
import { UseState } from "@/types/common";

import data from "@/public/data/nav/header/header.json";

import styles from "./style.module.scss";

const MobileBurgerMenu = ({
  activeMenuLink,
  setActiveMenuLink,
}: {
  activeMenuLink: 0 | 1 | 2 | 3;
  setActiveMenuLink: UseState<0 | 1 | 2 | 3>;
}) => {
  return (
    <ul className={styles.list}>
      <li
        className={`${styles.list__item} ${
          activeMenuLink === 0 ? styles.list__item__active : ""
        }`}
      >
        <Link
          onClick={() => setActiveMenuLink(0)}
          href={data.bulletin_board.href}
        >
          {data.bulletin_board.title}
        </Link>
      </li>
      <li
        className={`${styles.list__item} ${
          activeMenuLink === 1 ? styles.list__item__active : ""
        }`}
      >
        <Link
          onClick={() => setActiveMenuLink(1)}
          href={data.service_center.href}
        >
          {data.service_center.title}
        </Link>
      </li>
      <li
        className={`${styles.list__item} ${
          activeMenuLink === 2 ? styles.list__item__active : ""
        }`}
      >
        <Link
          onClick={() => setActiveMenuLink(2)}
          href={data.internet_store.href}
        >
          {data.internet_store.title}
        </Link>
      </li>
      <li
        className={`${styles.list__item} ${
          activeMenuLink === 3 ? styles.list__item__active : ""
        }`}
      >
        <Link onClick={() => setActiveMenuLink(3)} href={data.purchase.href}>
          {data.purchase.title}
        </Link>
      </li>
    </ul>
  );
};

export default MobileBurgerMenu;
