"use client";
import { useEffect, useState } from "react";
import { Goods } from "../Sections";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { IItem } from "@/types/props";

import data from "@/public/data/pages/main.json";
import goodsData from "@/public/data/goods/cards.json";

const GoodsFromDily = () => {
  const fromDilyData = data["goods-sections"]["from-dily"];
  const [listGoodsFromDily, setListGoodsFromDily] = useState<IItem[]>([]);

  const isMediaMD = useMediaQuery(768);
  const countCards = isMediaMD ? 4 : 5;

  useEffect(() => {
    setListGoodsFromDily(
      goodsData.goods
        .filter((item) => item.isFromDily === true)
        .slice(0, countCards)
    );
  }, [countCards]);

  return (
    <Goods
      title={fromDilyData.title}
      isHaveLogo
      linkAll={{
        text: fromDilyData["link-all"].text,
        href: fromDilyData["link-all"].href,
      }}
      list={listGoodsFromDily}
    />
  );
};

export default GoodsFromDily;
