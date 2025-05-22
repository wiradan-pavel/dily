import { CloseBtn } from "../../../shared/index";
import { UseState } from "@/types/common";

import data from "@/public/data/popups/request_send.json";

import styles from "./style.module.scss";

const RequestSend = ({
  setOpenPopupRequestSend,
}: {
  setOpenPopupRequestSend: UseState<boolean>;
}) => {
  return (
    <div className="popup-wrapper">
      <div className={styles.popup}>
        <CloseBtn onClick={() => setOpenPopupRequestSend(false)} />
        <h6 className={styles.popup__title}>{data.title}</h6>
        <p className={styles.popup__text}>{data.text}</p>
      </div>
    </div>
  );
};

export default RequestSend;
