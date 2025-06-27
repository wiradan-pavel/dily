import {
  Carousel,
  GoodsActual,
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
    </>
  );
};

export default Main;
