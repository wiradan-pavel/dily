"use client";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./usePrevNextButtons";

// imgs
import personalImg from "@/public/img/shared/looking/personal.svg";
import phoneImg from "@/public/img/shared/looking/phone.svg";
import electronicImg from "@/public/img/shared/looking/electronic.svg";
import homeAppliancesImg from "@/public/img/shared/looking/home-appliances.svg";
import houseAndGardenImg from "@/public/img/shared/looking/house-and-garden.svg";
import forChildImg from "@/public/img/shared/looking/for-child.svg";
import animalImg from "@/public/img/shared/looking/animal.svg";
import hobbyImg from "@/public/img/shared/looking/hobby.svg";
import transportImg from "@/public/img/shared/looking/transport.svg";
import carGoodsImg from "@/public/img/shared/looking/car-goods.svg";
import estateImg from "@/public/img/shared/looking/estate.svg";
import jobImg from "@/public/img/shared/looking/job.svg";
import serviceImg from "@/public/img/shared/looking/service.svg";
import businessImg from "@/public/img/shared/looking/business.svg";
import charityImg from "@/public/img/shared/looking/charity.svg";

import listData from "@/public/data/nav/menu/bulletin_menu.json";

import styles from "./style.module.scss";

const Looking = () => {
  const arrayImg = [
    personalImg,
    phoneImg,
    electronicImg,
    homeAppliancesImg,
    houseAndGardenImg,
    forChildImg,
    animalImg,
    hobbyImg,
    transportImg,
    carGoodsImg,
    estateImg,
    jobImg,
    serviceImg,
    businessImg,
    charityImg,
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel({ startIndex: 4 });
  const {
    nextBtnDisabled,
    onNextButtonClick,
    prevBtnDisabled,
    onPrevButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={styles.looking}>
      <div className="container">
        <h4 className="title">Вы ищете:</h4>
        <div className={styles.looking__list__container} ref={emblaRef}>
          <ul className={styles.looking__list}>
            {listData.menu.map((item) => (
              <li className={styles.looking__list__item} key={item.id}>
                <Link href={item.href}>
                  <span>
                    <Image alt={item.title} src={arrayImg[item.id - 1]} />
                  </span>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.looking__controls}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default Looking;
