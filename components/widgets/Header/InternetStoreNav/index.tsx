"use client";
import { useState } from "react";
import Link from "next/link";
import {
  CartSvg,
  CompareSvg,
  DeliveryAndPaymentSvg,
  LikeSvg,
} from "@/components/svgs";
import Menu from "./Menu";
import { BurgerBtn, SearchForm } from "@/components/shared";

import data from "@/public/data/nav/header/internet_store.json";

import styles from "./style.module.scss";

const InternetStoreNav = () => {
  const [activeStorePage, setActiveStorePage] = useState<0 | 1>(0);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles.store}>
      {openMenu && <Menu />}
      <nav>
        <ul className={styles.store__list}>
          <li
            onClick={() => setActiveStorePage(0)}
            className={`${styles.store__list__item} ${
              activeStorePage === 0 ? styles.store__list__item__active : ""
            }`}
          >
            <button className={styles.store__list__item__btn}>
              <BurgerBtn openMenu={openMenu} setOpenMenu={setOpenMenu} />
              {data.catalog.title}
            </button>
          </li>
          <li
            onClick={() => setActiveStorePage(1)}
            className={`${styles.store__list__item} ${
              activeStorePage === 1 ? styles.store__list__item__active : ""
            }`}
          >
            <Link
              className={styles.store__list__item__link}
              href={data.delivery_and_payment.href}
            >
              <DeliveryAndPaymentSvg />
              {data.delivery_and_payment.title}
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.store__actions}>
        <SearchForm />
        <div className={styles.store__actions__btns}>
          <Link
            className={styles.store__actions__btns__support}
            href={data.support.href}
          >
            {data.support.title}
          </Link>
          <ul className={styles.store__actions__btns__list}>
            <li className={styles.store__actions__btns__list__item}>
              <button className={styles.store__actions__btns__list__item__btn}>
                <CompareSvg />
              </button>
            </li>
            <li className={styles.store__actions__btns__list__item}>
              <button className={styles.store__actions__btns__list__item__btn}>
                <LikeSvg />
              </button>
            </li>
            <li className={styles.store__actions__btns__list__item}>
              <button className={styles.store__actions__btns__list__item__btn}>
                <CartSvg />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InternetStoreNav;
