import { IButtonProps } from '@/types/props';

import styles from './style.module.scss';

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
        paddingTop: paddingY + 'px',
        paddingBottom: paddingY + 'px',
        paddingLeft: paddingX + 'px',
        paddingRight: paddingX + 'px',
        borderRadius: borderRadius + 'px',
      }}
      className={`${styles.btn} ${style === 'green' && styles.btn__green} ${
        isShadow && styles.btn__shadow
      }`}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
