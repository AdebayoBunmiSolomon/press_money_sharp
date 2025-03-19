import { colors } from "@src/resources/colors/colors";

export const useCustomButton = () => {
  const getButtonColor = (
    bgWhite?: boolean,
    bgDeemWhite?: boolean,
    bgRed?: boolean,
    bgBlack?: boolean,
    bgGray?: boolean,
    bgDarkGray?: boolean
  ) => {
    if (bgWhite) {
      return colors?.white;
    } else if (bgDeemWhite) {
      return colors?.deemWhite;
    } else if (bgRed) {
      return colors?.red;
    } else if (bgBlack) {
      return colors?.black;
    } else if (bgGray) {
      return colors.gray;
    } else if (bgDarkGray) {
      return colors.darkGray;
    }
  };

  return {
    getButtonColor,
  };
};
