"use client";
import { Goods } from "../Sections";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import goodsData from "@/public/data/goods/cards.json";

const GoodsFromDily = () => {
  const isMediaMD = useMediaQuery(768);
  const countCards = isMediaMD ? 4 : 5;

  const listGoodsFromDily = goodsData.goods
    .filter((item) => item.isFromDily === true)
    .slice(0, countCards);

  return (
    <Goods
      title="Предложения от "
      isHaveLogo
      linkAll={{ text: "Смотреть все", href: "#" }}
      list={listGoodsFromDily}
    />
  );
};

export default GoodsFromDily;
