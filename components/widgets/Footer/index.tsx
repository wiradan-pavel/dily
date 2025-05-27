import Link from "next/link";
import { Location, Logo, SocialList } from "@/components/shared";

import data from "@/public/data/nav/footer/footer.json";

import styles from "./style.module.scss";

const Footer = () => {
  const contentData = data.content;
  const bulletinContentData = contentData.bulletin_board;
  const serviceContentData = contentData.service_center;
  const storeContentData = contentData.internet_store;
  const usersContentData = contentData.for_users;

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__actions}>
          <div className={`${styles.footer__actions__inner} container`}>
            <div className={styles.footer__actions__logo}>
              <Logo />
              <Location />
            </div>
            <div className={styles.footer__actions__social}>
              <p className={styles.footer__actions__social__text}>
                Присоединяйтесь к нам
              </p>
              <SocialList />
            </div>
          </div>
        </div>
        <div className="container">
          <nav className={styles.footer__content}>
            {/* bulletin */}
            <ul className={styles.footer__content__list}>
              {bulletinContentData.map((item) => (
                <li
                  key={item.id}
                  className={styles.footer__content__list__item}
                >
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
            {/* service */}
            <ul className={styles.footer__content__list}>
              {serviceContentData.map((item) => (
                <li
                  key={item.id}
                  className={styles.footer__content__list__item}
                >
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
            {/* store */}
            <ul className={styles.footer__content__list}>
              {storeContentData.map((item) => (
                <li
                  key={item.id}
                  className={styles.footer__content__list__item}
                >
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
            {/* users */}
            <ul className={styles.footer__content__list}>
              {usersContentData.map((item) => (
                <li
                  key={item.id}
                  className={styles.footer__content__list__item}
                >
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className={styles.footer__rights}>
          <ul className={styles.footer__rights__list}>
            {data.rights.map((item) => (
              <li key={item.id} className={styles.footer__rights__list__item}>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
          <p className={styles.footer__rights__dily}>
            {data.dily.title}
            <span>{data.dily.year}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
