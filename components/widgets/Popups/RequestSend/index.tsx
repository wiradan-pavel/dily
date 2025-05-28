import { CloseBtn } from "../../../shared/index";

import data from "@/public/data/popups/request_send.json";

import styles from "./style.module.scss";

const RequestSend = ({
  handleClosePopupRequestSend,
}: {
  handleClosePopupRequestSend: () => void;
}) => {
  return (
    <div className="popup-wrapper">
      <div className={styles.popup}>
        <CloseBtn onClick={handleClosePopupRequestSend} />
        <h6 className={styles.popup__title}>{data.title}</h6>
        <p className={styles.popup__text}>{data.text}</p>
      </div>
    </div>
  );
};

export default RequestSend;
