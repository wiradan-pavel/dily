import { IOpenMenuProps } from "@/types/common";

import styles from "./style.module.scss";

const BurgerBtn = ({ openMenu, setOpenMenu }: IOpenMenuProps) => {
  return (
    <div
      onClick={() => setOpenMenu(!openMenu)}
      className={`${styles.burger} ${openMenu ? styles.burger__open : ""}`}
    >
      <span />
      <span />
      <span />
    </div>
  );
};

export default BurgerBtn;
