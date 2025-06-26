export const getWindowWidth = () => {
  const { innerWidth: windowWidth } =
    typeof window !== "undefined" ? window : { innerWidth: 0 };
  return { windowWidth };
};

export const addOverflowHiddenToBody = () => {
  const body = document.querySelector("body") as HTMLBodyElement;
  body.classList.add("overflow-hidden");
};

export const removeOverflowHiddenToBody = () => {
  const body = document.querySelector("body") as HTMLBodyElement;
  body.classList.remove("overflow-hidden");
};

export const setLocalStorage = (key: string, value: string) => {
  return typeof window !== "undefined"
    ? window.localStorage.setItem(key, value)
    : "";
};

export const getLocalStorageByKey = (key: string) => {
  return typeof window !== "undefined" ? window.localStorage.getItem(key) : "";
};

export const addNumberSpaces = (number: number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
