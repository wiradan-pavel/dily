"use client";
import { useState } from "react";
import Link from "next/link";
import { Button, SearchForm } from "@/components/shared";
import { AdressesSvg, ArrowDownSvg, WhatWeAreFixSvg } from "@/components/svgs";
import Menu from "./Menu";

import data from "@/public/data/nav/header/service_center.json";

import styles from "./style.module.scss";

const ServiceCenterNav = () => {
  const [activeServicePage, setActiveServicePage] = useState<0 | 1>(0);
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setActiveServicePage(0);
    setOpenMenu(!openMenu);
  };

  return (
    <div className={styles.service}>
      {openMenu && <Menu />}
      <nav>
        <ul className={styles.service__list}>
          <li
            className={`${styles.service__list__item} ${
              activeServicePage === 0 ? styles.service__list__item__active : ""
            } ${openMenu ? styles.service__list__item__open : ""}`}
            onClick={handleOpenMenu}
          >
            <button className={styles.service__list__item__btn}>
              <WhatWeAreFixSvg />
              {data.what_we_are_fix.title}
              <ArrowDownSvg />
            </button>
          </li>
          <li
            className={`${styles.service__list__item} ${
              activeServicePage === 1 ? styles.service__list__item__active : ""
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
        </ul>
      </nav>
      <div className={styles.service__actions}>
        <SearchForm />
        <Button
          text={data.btn_order_repair.title}
          style="green"
          paddingX="25px"
          paddingY="7px"
          borderRadius={18}
        />
      </div>
    </div>
  );
};

export default ServiceCenterNav;
