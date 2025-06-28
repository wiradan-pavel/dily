"use client";
import { useState } from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { addNumberSpaces } from "@/utils/common";
import { useAppDispatch } from "@/lib/state/hooks";
import { addLike, removeLike } from "@/lib/state/product/productLikeSlice";
import { IItem } from "@/types/props";
import { LikeSvg } from "@/components/svgs";

import style from "./style.module.scss";

const ProductCard = ({ item }: { item: IItem }) => {
  const [like, setLike] = useState(false);
  const productDispatch = useAppDispatch();

  const handleClickLike = () => {
    setLike(!like);

    if (like !== true) {
      productDispatch(addLike(item));
    } else {
      productDispatch(removeLike(item.id));
    }
  };

  return (
    <li className={style.item}>
      <Link className={style.item__link} href={item.link}>
        <CldImage
          className={style.item__img}
          src={item.img.url}
          alt={item.img.alt}
          width="214"
          height="166"
        />
        <div className={style.item__info}>
          <h6 className={style.item__title}>{item.title}</h6>
          <p className={style.item__price}>
            <span
              className={`${
                item.discountPrice !== undefined && style.item__price__wrong
              }`}
            >
              {addNumberSpaces(item.price)}₽
            </span>
            {item.discountPrice !== undefined && (
              <span>{addNumberSpaces(item.discountPrice)}₽</span>
            )}
          </p>
          <p className={style.item__location}>{item.location}</p>
        </div>
        <CldImage
          className={style.item__seller}
          src={item.seller.img.url}
          alt={item.seller.img.alt}
          title={item.seller.name}
          width="25"
          height="25"
        />
      </Link>
      <span
        className={`${style.item__like} ${
          like ? style.item__like__active : ""
        }`}
        onClick={handleClickLike}
      >
        <LikeSvg />
      </span>
    </li>
  );
};

export default ProductCard;
