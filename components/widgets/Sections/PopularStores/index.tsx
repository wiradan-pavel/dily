"use client";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { StoreCard } from "@/components/shared";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { IItemStore } from "@/types/props";

import data from "@/public/data/stores/stores.json";

import style from "./style.module.scss";

const PopularStores = () => {
  const isMediaSM = useMediaQuery(576);

  const popularStores: IItemStore[] = data
    .sort((a, b) => b.subscribers - a.subscribers)
    .slice(0, 5);

  const [emblaRef] = useEmblaCarousel({ loop: true, startIndex: 1 }, [
    AutoScroll({ speed: 1, startDelay: 0 }),
  ]);

  return (
    <section className={style.stores}>
      <div className="container">
        <div className={style.stores__top}>
          <h6 className="title">Популярные магазины</h6>
          {!isMediaSM && (
            <Link className={style.stores__top__link} href="#">
              Смотреть все
            </Link>
          )}
        </div>
        <div className={style.stores__list__wrapper} ref={emblaRef}>
          <ul className={style.stores__list}>
            {popularStores.map((item) => (
              <StoreCard key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PopularStores;
