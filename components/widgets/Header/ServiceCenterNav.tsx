import { useState } from 'react';
import Link from 'next/link';
import { Button, SearchForm } from '@/components/shared';
import { AdressesSvg, ArrowDownSvg, WhatWeAreFixSvg } from '@/components/svgs';

import data from '@/public/data/nav/service_center.json';

import styles from './style.module.scss';

const ServiceCenterNav = () => {
  const [activeServicePage, setActiveServicePage] = useState<0 | 1>(0);
  const [openServiceMenu, setOpenServiceMenu] = useState(false);

  const handleOpenMenu = () => {
    setActiveServicePage(0);
    setOpenServiceMenu(!openServiceMenu);
  };

  return (
    <div className={styles.service}>
      <nav className={styles.service__nav}>
        <ul className={styles.service__nav__list}>
          <li
            className={`${styles.service__nav__list__item} ${
              activeServicePage === 0 ? styles.service__nav__list__item__active : ''
            } ${openServiceMenu ? styles.service__nav__list__item__open : ''}`}
            onClick={handleOpenMenu}
          >
            <button>
              <WhatWeAreFixSvg />
              {data.what_we_are_fix.title}
              <ArrowDownSvg />
            </button>
          </li>
          <li
            className={`${styles.service__nav__list__item} ${
              activeServicePage === 1 ? styles.service__nav__list__item__active : ''
            }`}
            onClick={() => setActiveServicePage(1)}
          >
            <Link href={data.addresses_of_services.href}>
              <AdressesSvg />
              {data.addresses_of_services.title}
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.service__right}>
        <SearchForm />
        <Button
          text={data.btn_order_repair.title}
          style="green"
          paddingX={25}
          paddingY={7}
          borderRadius={18}
        />
      </div>
    </div>
  );
};

export default ServiceCenterNav;
