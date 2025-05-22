import { CloseBtnSvg } from "@/components/svgs";

import styles from "./style.module.scss";

const CloseBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      <CloseBtnSvg />
    </button>
  );
};

export default CloseBtn;
