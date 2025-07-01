import { StarGreenStrokeSvg, StarGreenSvg } from "@/components/svgs";

import style from "./style.module.scss";

const RateStars = ({ rate }: { rate: number }) => {
  switch (rate) {
    case 1:
      return (
        <div className={style.stars}>
          <StarGreenSvg />
          <span>
            <StarGreenStrokeSvg />
          </span>
          <span>
            <StarGreenStrokeSvg />
          </span>
          <span>
            <StarGreenStrokeSvg />
          </span>
          <span>
            <StarGreenStrokeSvg />
          </span>
        </div>
      );
    case 2:
      return (
        <div className={style.stars}>
          <StarGreenSvg />
          <StarGreenSvg />
          <span>
            <StarGreenStrokeSvg />
          </span>
          <span>
            <StarGreenStrokeSvg />
          </span>
          <span>
            <StarGreenStrokeSvg />
          </span>
        </div>
      );
    case 3:
      return (
        <div className={style.stars}>
          <StarGreenSvg />
          <StarGreenSvg />
          <StarGreenSvg />
          <span>
            <StarGreenStrokeSvg />
          </span>
          <span>
            <StarGreenStrokeSvg />
          </span>
        </div>
      );
    case 4:
      return (
        <div className={style.stars}>
          <StarGreenSvg />
          <StarGreenSvg />
          <StarGreenSvg />
          <StarGreenSvg />
          <span>
            <StarGreenStrokeSvg />
          </span>
        </div>
      );
    case 5:
      return (
        <div className={style.stars}>
          <StarGreenSvg />
          <StarGreenSvg />
          <StarGreenSvg />
          <StarGreenSvg />
          <StarGreenSvg />
        </div>
      );
    default:
      return (
        <div className={style.stars}>
          <span>
            <StarGreenStrokeSvg />
          </span>
          <span>
            <StarGreenStrokeSvg />
          </span>
          <span>
            <StarGreenStrokeSvg />
          </span>
          <span>
            <StarGreenStrokeSvg />
          </span>
          <span>
            <StarGreenStrokeSvg />
          </span>
        </div>
      );
  }
};

export default RateStars;
