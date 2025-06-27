"use client";
import { Goods } from "../Sections";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import goodsData from "@/public/data/goods/cards.json";

const GoodsForFree = () => {
  const isMediaMD = useMediaQuery(768);
  const countCards = isMediaMD ? 4 : 5;

  const listGoodsForFree = goodsData.goods
    .filter((item) => item.price === 0)
    .slice(0, countCards);

  return (
    <Goods
      title="Отдам даром"
      titleIsGreen
      linkAll={{ text: "Смотреть все", href: "#" }}
      list={listGoodsForFree}
    />
  );
};

export default GoodsForFree;
