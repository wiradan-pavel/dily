"use client";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ArrowLeftBgWhiteSvg } from "@/components/svgs";

// img
import discountFromDilySvg from "@/public/img/pages/main/banners/discount-from-dily.svg";
import discountFromDilyBgSvg from "@/public/img/pages/main/banners/discount-from-dily-bg.svg";
import selectionSvg from "@/public/img/pages/main/banners/selection.svg";
import selectionBgSvg from "@/public/img/pages/main/banners/selection-bg.svg";

import data from "@/public/data/pages/main.json";

import style from "./style.module.scss";

const SelectionBanners = () => {
  const inMediaSM = useMediaQuery(576);

  const leftBannerData = data.banners["discount-from-dily"];
  const rightBannerData = data.banners["selection-products"];

  return (
    <section>
      <div className={`container ${style.banners}`}>
        <Link href={leftBannerData.href} className={style.banners__left}>
          <p className={style.banners__left__title}>{leftBannerData.title}</p>
          <p className={style.banners__left__subtitle}>
            {leftBannerData.subtitle}
          </p>
          {!inMediaSM && (
            <Image
              className={style.banners__left__img}
              src={discountFromDilySvg}
              alt=""
            />
          )}
          <Image
            className={style.banners__left__img__bg}
            src={discountFromDilyBgSvg}
            alt=""
          />
          {/* percent */}
          <div
            className={`${style.banners__left__percent} ${style.banners__left__percent__30}`}
          >
            30<span>%</span>
          </div>
          <div
            className={`${style.banners__left__percent} ${style.banners__left__percent__40}`}
          >
            40<span>%</span>
          </div>
          <div
            className={`${style.banners__left__percent} ${style.banners__left__percent__60}`}
          >
            60<span>%</span>
          </div>
        </Link>
        <Link href={rightBannerData.href} className={style.banners__right}>
          <p className={style.banners__right__title}>{rightBannerData.title}</p>
          <ArrowLeftBgWhiteSvg />
          <Image
            className={style.banners__right__img}
            src={selectionSvg}
            alt=""
          />
          <Image
            className={style.banners__right__img__bg}
            src={selectionBgSvg}
            alt=""
          />
        </Link>
      </div>
    </section>
  );
};

export default SelectionBanners;
