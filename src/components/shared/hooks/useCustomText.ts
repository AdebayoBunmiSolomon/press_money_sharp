import { colors } from "@src/resources/colors/colors";
import { fontFamily } from "@src/resources/fonts";
import { textType } from "../text/CustomText";

export const useCustomText = () => {
  const getFontFamily = (type: textType) => {
    if (type === "Bold") {
      return fontFamily.bold;
    } else if (type === "Light") {
      return fontFamily.light;
    } else if (type === "Medium") {
      return fontFamily.medium;
    } else if (type === "Regular") {
      return fontFamily.regular;
    } else if (type === "Semi-Bold") {
      return fontFamily.semi_bold;
    }
  };

  const getTextColor = (
    textWhite?: boolean,
    textDeemWhite?: boolean,
    textRed?: boolean,
    textBlack?: boolean,
    textGray?: boolean,
    textDarkGray?: boolean
  ) => {
    if (textWhite) {
      return colors?.white;
    } else if (textDeemWhite) {
      return colors?.deemWhite;
    } else if (textRed) {
      return colors.red;
    } else if (textBlack) {
      return colors.black;
    } else if (textGray) {
      return colors.gray;
    } else if (textDarkGray) {
      return colors?.darkGray;
    }
  };

  return {
    getFontFamily,
    getTextColor,
  };
};
