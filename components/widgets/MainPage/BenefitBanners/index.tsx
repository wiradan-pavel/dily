"use client";
import Link from "next/link";
import Image from "next/image";
import { Button, ProductCard } from "@/components/shared";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import bestOffersImg from "@/public/img/pages/main/banners/best-offers.svg";
import bestOffersBgImg from "@/public/img/pages/main/banners/best-offers-bg.svg";
import discountBgImg from "@/public/img/pages/main/banners/discount-of-the-day-bg.svg";

import data from "@/public/data/pages/main.json";
import dataGoods from "@/public/data/goods/cards.json";

import style from "./style.module.scss";

const BenefitBanners = () => {
  const isMediaLG = useMediaQuery(992);
  const dataBest = data.banners["best-offers"];
  const dataDiscount = data.banners["discount-of-the-day"];

  const discountProduct = dataGoods.goods
    .filter((item) => item.discountPrice !== undefined)
    .sort(
      (a, b) =>
        (a.discountPrice - a.price) * 100 - (b.discountPrice - b.price) * 100
    )
    .splice(0, 1);

  const procent =
    100 - (discountProduct[0].discountPrice / discountProduct[0].price) * 100;

  return (
    <section>
      <div className={`container ${style.container}`}>
        <div className={style.best}>
          <h6 className={style.best__title}>{dataBest.title}</h6>
          <p className={style.best__text}>{dataBest.text}</p>
          <Link href={dataBest.btn.href}>
            <Button
              text={dataBest.btn.text}
              style="green"
              borderRadius={10}
              paddingX="56px"
              paddingY="12px"
            />
          </Link>
          <Image
            className={style.best__img}
            src={bestOffersImg}
            alt={dataBest.title}
          />
          <Image className={style.best__img} src={bestOffersBgImg} alt="" />
        </div>
        {!isMediaLG && (
          <div className={style.discount}>
            <h6 className={style.discount__title}>{dataDiscount.title}</h6>
            <ul className={style.discount__card}>
              <div className={style.discount__card__procent}>
                <p>
                  {Math.round(procent)}
                  <span>%</span>
                </p>
              </div>
              <ProductCard item={discountProduct[0]} />
            </ul>
            <Link href={dataDiscount.btn.href}>
              <Button
                text={dataDiscount.btn.text}
                style="white"
                borderRadius={10}
                paddingX="59px"
                paddingY="12px"
              />
            </Link>
            <Image className={style.discount__img} src={discountBgImg} alt="" />
          </div>
        )}
      </div>
    </section>
  );
};

export default BenefitBanners;
