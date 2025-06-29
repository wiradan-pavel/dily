import {
  BenefitBanners,
  Carousel,
  GoodsActual,
  GoodsForFree,
  GoodsForYou,
  GoodsFromDily,
  SelectionBanners,
} from "../widgets/MainPage";
import { Looking } from "../widgets/Sections";

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
    </>
  );
};

export default Main;
