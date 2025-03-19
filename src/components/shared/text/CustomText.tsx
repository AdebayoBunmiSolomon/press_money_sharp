import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { useCustomText } from "../hooks";
import { moderateScale } from "@src/resources/scaling";

export type textType = "Bold" | "Light" | "Medium" | "Regular" | "Semi-Bold";

interface ICustomTextProps {
  children: React.ReactNode;
  size: number;
  type?: textType;
  textWhite?: boolean;
  textDeemWhite?: boolean;
  textRed?: boolean;
  textBlack?: boolean;
  textGray?: boolean;
  textDarkGray?: boolean;
  style?: StyleProp<TextStyle>;
}

export const CustomText: React.FC<ICustomTextProps> = ({
  children,
  size,
  type,
  textWhite,
  textDeemWhite,
  textRed,
  textBlack,
  textGray,
  textDarkGray,
  style,
}) => {
  const { getFontFamily, getTextColor } = useCustomText();
  const fontFamily = getFontFamily(type ? type : "Regular");
  const textColor = getTextColor(
    textWhite,
    textDeemWhite,
    textRed,
    textBlack,
    textGray,
    textDarkGray
  );
  return (
    <Text
      style={[
        {
          fontFamily: fontFamily,
          fontSize: moderateScale(size),
          color: textColor,
        },
        style,
      ]}>
      {children && children}
    </Text>
  );
};
