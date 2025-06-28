"use client";
import { Goods } from "../Sections";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import data from "@/public/data/pages/main.json";
import goodsData from "@/public/data/goods/cards.json";

const GoodsActual = () => {
  const actualData = data["goods-sections"].actual;

  const isMediaMD = useMediaQuery(768);
  const countCards = isMediaMD ? 4 : 5;

  const listGoodsActual = goodsData.goods
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, countCards);

  return (
    <Goods
      title={actualData.title}
      linkAll={{
        text: actualData["link-all"].text,
        href: actualData["link-all"].href,
      }}
      list={listGoodsActual}
    />
  );
};

export default GoodsActual;
