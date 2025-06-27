"use client";
import { Goods } from "../Sections";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import goodsData from "@/public/data/goods/cards.json";

const GoodsActual = () => {
  const isMediaMD = useMediaQuery(768);
  const countCards = isMediaMD ? 4 : 5;

  const listGoodsActual = goodsData.goods
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, countCards);

  return (
    <Goods
      title="Актуальные предложения"
      linkAll={{ text: "Смотреть все", href: "#" }}
      list={listGoodsActual}
    />
  );
};

export default GoodsActual;
