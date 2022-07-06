import { Mode } from "./tokens";

const modeKey = "sar-mode";

export const getMode = (): Mode => {
  return (window.localStorage.getItem(modeKey) ?? "dark") as Mode;
};

export const saveMode = (mode: Mode): void => {
  window.localStorage.setItem(modeKey, mode);
};
