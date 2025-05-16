export type UseState<T> = (value: T | ((prevState: T) => T)) => void;

export interface IOpenMenuProps {
  openMenu: boolean;
  setOpenMenu: UseState<boolean>;
}
