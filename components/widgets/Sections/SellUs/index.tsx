import Image from "next/image";
import { IItemSellUsSection } from "@/types/props";

import sellUsImg1 from "@/public/img/shared/sell-us-section/1.svg";
import sellUsImg2 from "@/public/img/shared/sell-us-section/2.svg";
import sellUsImg3 from "@/public/img/shared/sell-us-section/3.svg";

import style from "./style.module.scss";

const SellUs = () => {
  const data: IItemSellUsSection[] = [
    {
      id: 1,
      text: "Бесплатная онлайн-оценка",
      img: {
        url: sellUsImg1,
        alt: "",
      },
    },
    {
      id: 2,
      text: "Привозите нам или вызовите специалиста",
      img: {
        url: sellUsImg2,
        alt: "",
      },
    },
    {
      id: 3,
      text: "Подпишите договор и получите деньги",
      img: {
        url: sellUsImg3,
        alt: "",
      },
    },
  ];

  return (
    <section>
      <div className={`container ${style.sell}`}>
        <h5 className={`title ${style.sell__title}`}>
          Продайте нам на раз - два - три
        </h5>
        <ul className={style.sell__list}>
          {data.map((item) => (
            <li className={style.sell__list__item} key={item.id}>
              <p className={style.sell__list__item__number}>{item.id}</p>
              <p className={style.sell__list__item__text}>{item.text}</p>
              <Image
                src={item.img.url}
                alt={item.img.alt}
                width={115}
                height={115}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SellUs;
