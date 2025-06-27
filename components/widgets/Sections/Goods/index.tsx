"use client";
import Link from "next/link";
import { ProductCard } from "@/components/shared";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { DilyLogoSvg } from "@/components/svgs";
import { ISectionGoodsProps } from "@/types/props";

import style from "./style.module.scss";

const Goods = ({
  title,
  isHaveLogo,
  titleIsGreen,
  linkAll,
  list,
}: ISectionGoodsProps) => {
  const isMediaSM = useMediaQuery(576);

  return (
    <section>
      <div className="container">
        <div className={style.goods__top}>
          <h4
            className={`title ${style.goods__top__title} ${
              titleIsGreen && style.goods__top__title__green
            }`}
          >
            {title} {isHaveLogo && <DilyLogoSvg />}
          </h4>
          {!isMediaSM && (
            <Link href={linkAll.href} className={style.goods__top__link}>
              {linkAll.text}
            </Link>
          )}
        </div>
        <ul className={style.goods__list}>
          {list.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Goods;
