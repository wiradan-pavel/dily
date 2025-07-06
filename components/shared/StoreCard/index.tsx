"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { RateStars } from "@/components/shared";

import { IItemStore } from "@/types/props";

import style from "./style.module.scss";

const StoreCard = ({ item }: { item: IItemStore }) => {
  const [data, setData] = useState<IItemStore>();

  useEffect(() => {
    setData(item);
  }, [item]);

  if (data === undefined) {
    return null;
  } else {
    return (
      <li className={style.item}>
        <Link
          className={`${style.item__link} ${
            style.item__link + "__" + data.styles.bgColor
          }`}
          href="#"
        >
          <div className={style.item__top}>
            <CldImage
              width={54}
              height={54}
              src={data.img.url}
              alt={data.img.alt}
            />
            <p
              className={`${style.item__top__name} ${
                style.item__top__name + "__" + data.styles.textColor
              }`}
            >
              {data.name}
            </p>
          </div>
          <div
            className={`${style.item__bottom} ${
              style.item__bottom + "__" + data.styles.styleBtns
            }`}
          >
            <div className={style.item__bottom__rate}>
              {data.rate}
              <RateStars rate={data.rate} />
            </div>
            <p className={style.item__bottom__location}>{data.location}</p>
          </div>
        </Link>
      </li>
    );
  }
};

export default StoreCard;
