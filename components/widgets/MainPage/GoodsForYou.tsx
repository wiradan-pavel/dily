"use client";
import { Goods } from "../Sections";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import goodsData from "@/public/data/goods/cards.json";

const GoodsForYou = () => {
  const isMediaMD = useMediaQuery(768);
  const countCards = isMediaMD ? 4 : 5;

  const listGoodsForYou = goodsData.goods
    .filter((item) => item.category === "PhonesAndAccessories")
    .slice(0, countCards);

  return (
    <Goods
      title="Подборка для вас"
      linkAll={{ text: "Смотреть все", href: "#" }}
      list={listGoodsForYou}
    />
  );
};

export default GoodsForYou;
