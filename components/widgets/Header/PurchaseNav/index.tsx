"use client";
import { useState } from "react";
import Link from "next/link";
import { BurgerBtn, Button, SearchForm } from "@/components/shared";
import { RequestSend, SellUs } from "../../Popups";
import { AdressesSvg } from "@/components/svgs";
import Menu from "./Menu";

import data from "@/public/data/nav/header/purchase.json";

import styles from "./style.module.scss";

const PurchaseNav = () => {
  const [activePurchasePage, setActivePurchasePage] = useState<0 | 1>(0);
  const [openMenu, setOpenMenu] = useState(false);
  const [openPopupSellUs, setOpenPopupSellUs] = useState(false);
  const [openPopupRequestSend, setOpenPopupRequestSend] = useState(false);

  const handleOpenPopupSellUs = () => {
    setOpenPopupSellUs(true);
  };

  return (
    <>
      {openPopupSellUs && (
        <SellUs
          setOpenPopupSellUs={setOpenPopupSellUs}
          setOpenPopupRequestSend={setOpenPopupRequestSend}
        />
      )}
      {openPopupRequestSend && (
        <RequestSend setOpenPopupRequestSend={setOpenPopupRequestSend} />
      )}
      <div className={styles.purchase}>
        {openMenu && <Menu />}
        <nav>
          <ul className={styles.purchase__list}>
            <li
              onClick={() => setActivePurchasePage(0)}
              className={`${styles.purchase__list__item} ${
                activePurchasePage === 0
                  ? styles.purchase__list__item__active
                  : ""
              }`}
            >
              <button className={styles.purchase__list__item__btn}>
                <BurgerBtn openMenu={openMenu} setOpenMenu={setOpenMenu} />
                {data.what_we_are_buy.title}
              </button>
            </li>
            <li
              onClick={() => setActivePurchasePage(1)}
              className={`${styles.purchase__list__item} ${
                activePurchasePage === 1
                  ? styles.purchase__list__item__active
                  : ""
              }`}
            >
              <Link
                className={styles.purchase__list__item__link}
                href={data.adresses_of_purchase.href}
              >
                <AdressesSvg />
                {data.adresses_of_purchase.title}
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.purchase__actions}>
          <SearchForm />
          <Button
            onClick={handleOpenPopupSellUs}
            text={data.btn_get_price.title}
            style="green"
            paddingX="25px"
            paddingY="7px"
            borderRadius={18}
          />
        </div>
      </div>
    </>
  );
};

export default PurchaseNav;
