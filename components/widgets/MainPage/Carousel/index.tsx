"use client";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// img
import charityImg from "@/public/img/pages/main/charity.svg";
import deliveryImg from "@/public/img/pages/main/delivery.svg";
import repairImg from "@/public/img/pages/main/repair.svg";
import saleUsImg from "@/public/img/pages/main/sale-us.svg";
import { ArrowLeftBgWhiteSvg } from "@/components/svgs";

import data from "@/public/data/pages/main.json";

import styles from "./style.module.scss";

const Carousel = () => {
  const carouselData = data.carousel;
  const isMediaSM = useMediaQuery(576);
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      startIndex: 1,
      align: () => 50,
    },
    [AutoScroll({ speed: 1, startDelay: 0 })]
  );

  return (
    <section className={styles.carousel} ref={emblaRef}>
      <ul className={styles.list}>
        {/* delivery */}
        <li className={`${styles.list__item} ${styles.list__item__delivery}`}>
          <Link href={carouselData.delivery.href}>
            <div className={styles.list__item__content}>
              <div>
                <h6 className={styles.list__item__content__title}>
                  {carouselData.delivery.title}
                </h6>
                <p className={styles.list__item__content__text}>
                  {carouselData.delivery.text}
                </p>
              </div>
              <span className={styles.list__item__content__btn}>
                <ArrowLeftBgWhiteSvg />
              </span>
            </div>
            <Image
              priority
              alt="delivery image"
              src={deliveryImg}
              width={249}
              height={200}
            />
          </Link>
        </li>
        {/* repair */}
        <li className={`${styles.list__item} ${styles.list__item__repair}`}>
          <Link href={carouselData.repair.href}>
            <div className={styles.list__item__content}>
              <div>
                <h6 className={styles.list__item__content__title}>
                  {carouselData.repair.title}
                </h6>
                <p className={styles.list__item__content__text}>
                  {carouselData.repair.text}
                </p>
              </div>
              <span className={styles.list__item__content__btn}>
                <ArrowLeftBgWhiteSvg />
              </span>
            </div>
            <Image
              priority
              alt="repair image"
              src={repairImg}
              width={isMediaSM ? 300 : 331}
              height={200}
            />
          </Link>
        </li>
        {/* charity */}
        <li className={`${styles.list__item} ${styles.list__item__charity}`}>
          <Link href={carouselData.charity.href}>
            <div className={styles.list__item__content}>
              <div>
                <h6 className={styles.list__item__content__title}>
                  {carouselData.charity.title}
                </h6>
                <p className={styles.list__item__content__text}>
                  {carouselData.charity.text}
                </p>
              </div>
              <span className={styles.list__item__content__btn}>
                <ArrowLeftBgWhiteSvg />
              </span>
            </div>
            <Image
              priority
              alt="charity image"
              src={charityImg}
              width={250}
              height={200}
            />
          </Link>
        </li>
        {/* sell us */}
        <li className={`${styles.list__item} ${styles.list__item__sell_us}`}>
          <Link href={carouselData["sell-us"].href}>
            <div className={styles.list__item__content}>
              <div>
                <h6 className={styles.list__item__content__title}>
                  {carouselData["sell-us"].title}
                </h6>
                <p className={styles.list__item__content__text}>
                  {carouselData["sell-us"].text}
                </p>
              </div>
              <span className={styles.list__item__content__btn}>
                <ArrowLeftBgWhiteSvg />
              </span>
            </div>
            <Image
              priority
              alt="sale us image"
              src={saleUsImg}
              width={250}
              height={200}
            />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Carousel;
