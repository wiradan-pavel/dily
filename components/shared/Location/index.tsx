"use client";
import { useState } from "react";
import { ArrowDownSvg, LocationSvg } from "../../svgs";
import Popup from "./Popup";
import { addOverflowHiddenToBody, getLocalStorageByKey } from "@/utils/common";

import styles from "./style.module.scss";

const Location = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const hadnleOpenPopup = () => {
    setOpenPopup(true);
    addOverflowHiddenToBody();
  };

  const city = getLocalStorageByKey("location");

  return (
    <>
      <button className={styles.btn} onClick={hadnleOpenPopup}>
        <LocationSvg />
        <span>{city === null ? "Москва" : city}</span>
        <ArrowDownSvg />
      </button>
      {openPopup && <Popup setOpenPopup={setOpenPopup} />}
    </>
  );
};

export default Location;
