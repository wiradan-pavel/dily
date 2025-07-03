"use client";
import { useEffect, useState } from "react";
import { Goods } from "../Sections";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { IItem } from "@/types/props";

import data from "@/public/data/pages/main.json";
import goodsData from "@/public/data/goods/cards.json";

const GoodsActual = () => {
  const actualData = data["goods-sections"].actual;
  const [listGoodsActual, setListGoodsActual] = useState<IItem[]>([]);

  const isMediaMD = useMediaQuery(768);
  const countCards = isMediaMD ? 4 : 5;

  useEffect(() => {
    setListGoodsActual(
      goodsData.goods
        .sort((a, b) => b.createdAt - a.createdAt)
        .slice(0, countCards)
    );
  }, [countCards]);

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
