"use client";
import { useState } from "react";
import Link from "next/link";
import { Button, SearchForm } from "@/components/shared";
import { OrderRepair, RequestSend } from "../../Popups";
import { AdressesSvg, ArrowDownSvg, WhatWeAreFixSvg } from "@/components/svgs";
import {
  addOverflowHiddenToBody,
  removeOverflowHiddenToBody,
} from "@/utils/common";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Menu from "./Menu";

import data from "@/public/data/nav/header/service_center.json";

import styles from "./style.module.scss";

const ServiceCenterNav = () => {
  const [activeServicePage, setActiveServicePage] = useState<0 | 1>(0);
  const [openMenu, setOpenMenu] = useState(false);
  const [openPopupOrderRepair, setOpenPopupOrderRepair] = useState(false);
  const [openPopupRequestSend, setOpenPopupRequestSend] = useState(false);

  const isMediaXL = useMediaQuery(1200);
  const isMediaSM = useMediaQuery(576);

  const handleOpenMenu = () => {
    setActiveServicePage(0);
    setOpenMenu(!openMenu);
  };

  const handleOpenPopupOrderRepair = () => {
    setOpenPopupOrderRepair(true);
    addOverflowHiddenToBody();
  };

  const handleClosePopupOrderRepair = () => {
    setOpenPopupOrderRepair(false);
    removeOverflowHiddenToBody();
  };

  const handleOpenPopupRequestSend = () => {
    setOpenPopupRequestSend(true);
    addOverflowHiddenToBody();
  };

  const handleClosePopupRequestSend = () => {
    setOpenPopupRequestSend(false);
    removeOverflowHiddenToBody();
  };

  return (
    <>
      {openPopupOrderRepair && (
        <OrderRepair
          handleClosePopupOrderRepair={handleClosePopupOrderRepair}
          handleOpenPopupRequestSend={handleOpenPopupRequestSend}
        />
      )}
      {openPopupRequestSend && (
        <RequestSend
          handleClosePopupRequestSend={handleClosePopupRequestSend}
        />
      )}
      <div className={styles.service}>
        {openMenu && <Menu />}
        <nav>
          <ul className={styles.service__list}>
            <li
              className={`${styles.service__list__item} ${
                activeServicePage === 0
                  ? styles.service__list__item__active
                  : ""
              } ${openMenu ? styles.service__list__item__open : ""}`}
              onClick={handleOpenMenu}
            >
              <button className={styles.service__list__item__btn}>
                <WhatWeAreFixSvg />
                {data.what_we_are_fix.title}
                <ArrowDownSvg />
              </button>
            </li>
            {!isMediaSM && (
              <li
                className={`${styles.service__list__item} ${
                  activeServicePage === 1
                    ? styles.service__list__item__active
                    : ""
                }`}
                onClick={() => setActiveServicePage(1)}
              >
                <Link
                  className={styles.service__list__item__link}
                  href={data.addresses_of_services.href}
                >
                  <AdressesSvg />
                  {data.addresses_of_services.title}
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div className={styles.service__actions}>
          {!isMediaXL && <SearchForm />}
          <Button
            text={data.btn_order_repair.title}
            style="green"
            paddingX={isMediaSM ? "15px" : "25px"}
            paddingY="7px"
            borderRadius={18}
            onClick={handleOpenPopupOrderRepair}
          />
        </div>
      </div>
    </>
  );
};

export default ServiceCenterNav;
