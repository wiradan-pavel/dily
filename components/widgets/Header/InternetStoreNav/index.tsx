"use client";
import { useState } from "react";
import Link from "next/link";
import {
  CartSvg,
  CompareSvg,
  DeliveryAndPaymentSvg,
  LikeSvg,
} from "@/components/svgs";
import { BurgerBtn, SearchForm } from "@/components/shared";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { CartModal, CompareModal, LikedModal } from "./Modals";
import Menu from "./Menu";

import data from "@/public/data/nav/header/internet_store.json";

import styles from "./style.module.scss";

const InternetStoreNav = () => {
  const [activeStorePage, setActiveStorePage] = useState<0 | 1>(0);
  const [openMenu, setOpenMenu] = useState(false);
  const [activeModal, setActiveModal] = useState<0 | 1 | 2 | 3>(0);

  const isMediaXL = useMediaQuery(1200);
  const isMediaSM = useMediaQuery(576);

  const handleClickCompareModal = () => {
    if (activeModal === 1) {
      setActiveModal(0);
    } else {
      setActiveModal(1);
    }
  };

  const handleClickLikedModal = () => {
    if (activeModal === 2) {
      setActiveModal(0);
    } else {
      setActiveModal(2);
    }
  };

  const handleClickCartModal = () => {
    if (activeModal === 3) {
      setActiveModal(0);
    } else {
      setActiveModal(3);
    }
  };

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
            {!isMediaSM && (
              <Link
                className={styles.store__list__item__link}
                href={data.delivery_and_payment.href}
              >
                <DeliveryAndPaymentSvg />
                {data.delivery_and_payment.title}
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <div className={styles.store__actions}>
        {!isMediaXL && <SearchForm />}
        <div className={styles.store__actions__btns}>
          {!isMediaSM && (
            <Link
              className={styles.store__actions__btns__support}
              href={data.support.href}
            >
              {data.support.title}
            </Link>
          )}

          <ul className={styles.store__actions__btns__list}>
            <li className={styles.store__actions__btns__list__item}>
              <button
                onClick={handleClickCompareModal}
                className={styles.store__actions__btns__list__item__btn}
              >
                <CompareSvg />
              </button>
            </li>
            <li className={styles.store__actions__btns__list__item}>
              <button
                onClick={handleClickLikedModal}
                className={styles.store__actions__btns__list__item__btn}
              >
                <LikeSvg />
              </button>
            </li>
            <li className={styles.store__actions__btns__list__item}>
              <button
                onClick={handleClickCartModal}
                className={styles.store__actions__btns__list__item__btn}
              >
                <CartSvg />
              </button>
            </li>
          </ul>
          {activeModal === 1 && <CompareModal />}
          {activeModal === 2 && <LikedModal />}
          {activeModal === 3 && <CartModal />}
        </div>
      </div>
    </div>
  );
};

export default InternetStoreNav;
