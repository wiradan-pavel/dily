"use client";
import { useEffect, useState } from "react";
import { Goods } from "../Sections";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { IItem } from "@/types/props";

import data from "@/public/data/pages/main.json";
import goodsData from "@/public/data/goods/cards.json";

const GoodsForYou = () => {
  const forYouData = data["goods-sections"]["for-you"];
  const [listGoodsForYou, setListGoodsForYou] = useState<IItem[]>([]);

  const isMediaMD = useMediaQuery(768);
  const countCards = isMediaMD ? 4 : 5;

  useEffect(() => {
    setListGoodsForYou(
      goodsData.goods
        .filter((item) => item.category === "PhonesAndAccessories")
        .slice(0, countCards)
    );
  }, [countCards]);

  return (
    <Goods
      title={forYouData.title}
      linkAll={{
        text: forYouData["link-all"].text,
        href: forYouData["link-all"].href,
      }}
      list={listGoodsForYou}
    />
  );
};

export default GoodsForYou;
