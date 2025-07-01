import {
  BenefitBanners,
  Carousel,
  GoodsActual,
  GoodsForFree,
  GoodsForYou,
  GoodsFromDily,
  SelectionBanners,
} from "../widgets/MainPage";
import { Looking, PopularStores } from "../widgets/Sections";

const Main = () => {
  return (
    <>
      <Carousel />
      <Looking />
      <GoodsForYou />
      <GoodsFromDily />
      <BenefitBanners />
      <GoodsActual />
      <GoodsForFree />
      <SelectionBanners />
      <PopularStores />
    </>
  );
};

export default Main;
