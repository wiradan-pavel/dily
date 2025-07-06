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
        }
          ${item.styles.bgColor === "red" && style.item__link__red} ${
          item.styles.bgColor === "white" && style.item__link__white
        } ${item.styles.bgColor === "blue" && style.item__link__blue} ${
          item.styles.bgColor === "yellow" && style.item__link__yellow
        } ${item.styles.bgColor === "green" && style.item__link__green} ${
          item.styles.bgColor === "grey" && style.item__link__grey
        } 
          ${item.styles.bgColor === "turquoise" && style.item__link__turquoise}
        `}
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
              item.styles.textColor === "white" && style.item__top__name__white
            } ${
              item.styles.textColor === "black" && style.item__top__name__black
            } ${
              item.styles.textColor === "orange" &&
              style.item__top__name__orange
            }`}
          >
            {item.name}
          </p>
        </div>
        <div
          className={`${style.item__bottom} ${
            item.styles.styleBtns === "white" && style.item__bottom__white
          } ${item.styles.styleBtns === "green" && style.item__bottom__green}`}
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
