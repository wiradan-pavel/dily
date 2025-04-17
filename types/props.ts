export interface IButtonProps {
  children?: React.ReactNode;
  text: string;
  style: 'green' | 'white';
  paddingX: number;
  paddingY: number;
  borderRadius: 10 | 18;
  isShadow?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}
