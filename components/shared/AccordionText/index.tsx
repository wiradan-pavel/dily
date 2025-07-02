"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowDownSvg } from "@/components/svgs";

import style from "./style.module.scss";

const AccordionText = ({
  textShow,
  textHidden,
}: {
  textShow: string[];
  textHidden: string[];
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const [height, setHeight] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeight(ref.current?.scrollHeight || 0);
  }, [ref]);

  return (
    <div className={style.accordion}>
      <div className={style.accordion__show}>
        {textShow.map((item, index) => (
          <p className={style.text} key={index}>
            {item}
          </p>
        ))}
      </div>
      <div
        ref={ref}
        className={style.accordion__hidden}
        style={{
          maxHeight: isHidden ? height + "px" : 0 + "px",
        }}
      >
        {textHidden.map((item, index) => (
          <p className={style.text} key={index}>
            {item}
          </p>
        ))}
      </div>
      <button
        onClick={() => setIsHidden(!isHidden)}
        className={style.accordion__btn}
      >
        {isHidden ? "свернуть" : "развернуть"}
        <span
          className={`${style.accordion__btn__arrow} ${
            isHidden ? style.accordion__btn__arrow__active : ""
          }`}
        >
          <ArrowDownSvg />
        </span>
      </button>
    </div>
  );
};

export default AccordionText;
