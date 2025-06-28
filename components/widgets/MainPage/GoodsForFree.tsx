"use client";
import { Goods } from "../Sections";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import data from "@/public/data/pages/main.json";
import goodsData from "@/public/data/goods/cards.json";

const GoodsForFree = () => {
  const forFreeData = data["goods-sections"]["for-free"];

  const isMediaMD = useMediaQuery(768);
  const countCards = isMediaMD ? 4 : 5;

  const listGoodsForFree = goodsData.goods
    .filter((item) => item.price === 0)
    .slice(0, countCards);

  return (
    <Goods
      title={forFreeData.title}
      titleIsGreen
      linkAll={{
        text: forFreeData["link-all"].text,
        href: forFreeData["link-all"].href,
      }}
      list={listGoodsForFree}
    />
  );
};

export default GoodsForFree;
