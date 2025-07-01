import { IButtonProps } from "@/types/props";

import styles from "./style.module.scss";

const Button = ({
  children,
  text,
  style,
  paddingX,
  paddingY,
  borderRadius,
  isShadow = false,
  disabled = false,
  onClick,
}: IButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        borderRadius: borderRadius + "px",
      }}
      className={`${styles.btn} ${style === "green" && styles.btn__green} ${
        style === "white" && styles.btn__white
      } ${isShadow && styles.btn__shadow}`}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
