'use client';
import { useState } from 'react';
import Link from 'next/link';
import { BurgerBtn, Button, SearchForm } from '@/components/shared';
import { AdressesSvg } from '@/components/svgs';

import data from '@/public/data/nav/purchase.json';

import styles from './style.module.scss';

const PurchaseNav = () => {
  const [activePurchasePage, setActivePurchasePage] = useState<0 | 1>(0);

  return (
    <div className={styles.purchase}>
      <nav>
        <ul className={styles.purchase__list}>
          <li
            onClick={() => setActivePurchasePage(0)}
            className={`${styles.purchase__list__item} ${
              activePurchasePage === 0 ? styles.purchase__list__item__active : ''
            }`}
          >
            <button className={styles.purchase__list__item__btn}>
              <BurgerBtn />
              {data.what_we_are_buy.title}
            </button>
          </li>
          <li
            onClick={() => setActivePurchasePage(1)}
            className={`${styles.purchase__list__item} ${
              activePurchasePage === 1 ? styles.purchase__list__item__active : ''
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
          text={data.btn_get_price.title}
          style="green"
          paddingX="25px"
          paddingY="7px"
          borderRadius={18}
        />
      </div>
    </div>
  );
};

export default PurchaseNav;
