import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { RateStars } from "@/components/shared";

import { IItemStore } from "@/types/props";

import style from "./style.module.scss";

const StoreCard = ({ item }: { item: IItemStore }) => {
  return (
    <li className={style.item}>
      <Link
        className={`${style.item__link} ${
          item.styles.bgColor === "orange" && style.item__link__orange
        }`}
        href="#"
      >
        <div className={style.item__top}>
          <CldImage
            width={54}
            height={54}
            src={item.img.url}
            alt={item.img.alt}
          />
          <p
            className={`${style.item__top__name} ${
              style.item__top__name + "__" + item.styles.textColor
            }`}
          >
            {item.name}
          </p>
        </div>
        <div
          className={`${style.item__bottom} ${
            style.item__bottom + "__" + item.styles.styleBtns
          }`}
        >
          <div className={style.item__bottom__rate}>
            {item.rate}
            <RateStars rate={item.rate} />
          </div>
          <p className={style.item__bottom__location}>{item.location}</p>
        </div>
      </Link>
    </li>
  );
};

export default StoreCard;
