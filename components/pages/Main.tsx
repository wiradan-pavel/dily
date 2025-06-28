import {
  BenefitBanners,
  Carousel,
  GoodsActual,
  GoodsForFree,
  GoodsForYou,
  GoodsFromDily,
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
    </>
  );
};

export default Main;
