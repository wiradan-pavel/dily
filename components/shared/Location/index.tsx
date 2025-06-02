"use client";
import { useState } from "react";
import { ArrowDownSvg, LocationSvg } from "../../svgs";
import Popup from "./Popup";
import {
  addOverflowHiddenToBody,
  removeOverflowHiddenToBody,
} from "@/utils/common";
import { useAppSelector } from "@/lib/state/hooks";

import styles from "./style.module.scss";

const Location = () => {
  const location = useAppSelector((state) => state.location.value);

  const [openPopup, setOpenPopup] = useState(false);

  const hadnleOpenPopup = () => {
    setOpenPopup(true);
    addOverflowHiddenToBody();
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    removeOverflowHiddenToBody();
  };

  return (
    <>
      <button className={styles.btn} onClick={hadnleOpenPopup}>
        <LocationSvg />
        <span>{location}</span>
        <ArrowDownSvg />
      </button>
      {openPopup && <Popup handleClosePopup={handleClosePopup} />}
    </>
  );
};

export default Location;
