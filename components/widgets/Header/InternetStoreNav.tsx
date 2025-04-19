'use client';
import { useState } from 'react';
import Link from 'next/link';
import { CartSvg, CompareSvg, DeliveryAndPaymentSvg, LikeSvg } from '@/components/svgs';
import { BurgerBtn, SearchForm } from '@/components/shared';

import data from '@/public/data/nav/internet_store.json';

import styles from './style.module.scss';

const InternetStoreNav = () => {
  const [activeStorePage, setActiveStorePage] = useState<0 | 1>(0);

  return (
    <div className={styles.store}>
      <nav>
        <ul className={styles.store__list}>
          <li
            onClick={() => setActiveStorePage(0)}
            className={`${styles.store__list__item} ${
              activeStorePage === 0 ? styles.store__list__item__active : ''
            }`}
          >
            <button>
              <BurgerBtn />
              {data.catalog.title}
            </button>
          </li>
          <li
            onClick={() => setActiveStorePage(1)}
            className={`${styles.store__list__item} ${
              activeStorePage === 1 ? styles.store__list__item__active : ''
            }`}
          >
            <Link href={data.delivery_and_payment.href}>
              <DeliveryAndPaymentSvg />
              {data.delivery_and_payment.title}
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.store__right}>
        <SearchForm />
        <div className={styles.store__btns}>
          <Link href={data.support.href}>{data.support.title}</Link>
          <ul className={styles.store__btns__list}>
            <li className={styles.store__btns__list__item}>
              <button>
                <CompareSvg />
              </button>
            </li>
            <li className={styles.store__btns__list__item}>
              <button>
                <LikeSvg />
              </button>
            </li>
            <li className={styles.store__btns__list__item}>
              <button>
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
