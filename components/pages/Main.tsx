import {
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
      <GoodsActual />
      <GoodsForFree />
    </>
  );
};

export default Main;
