import { screenWindowHeight, screeWindowWidth } from "./Dimensions-Utils";

export const DVH = (percentage: number) => {
  return (percentage / 100) * screenWindowHeight;
};

export const DVW = (percentage: number) => {
  return (percentage / 100) * screeWindowWidth;
};
