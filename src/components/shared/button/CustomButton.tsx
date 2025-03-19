import React from "react";
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { CustomText, textType } from "../text/CustomText";
import { moderateScale } from "@src/resources/scaling";
import { useCustomButton, useCustomText } from "../hooks";
import { Loader } from "@src/common";

export type buttonType = "Outline" | "Solid";

interface ICustomButtonProps {
  title: string;
  onPress: () => void;
  textType: textType;
  buttonType: buttonType;
  textSize?: number;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  isLoading?: boolean;
  loaderColor?: string;
  bgWhite?: boolean;
  bgDeemWhite?: boolean;
  bgRed?: boolean;
  bgBlack?: boolean;
  bgGray?: boolean;
  bgDarkGray?: boolean;
  textWhite?: boolean;
  textDeemWhite?: boolean;
  textRed?: boolean;
  textBlack?: boolean;
  textGray?: boolean;
  textDarkGray?: boolean;
  style?: StyleProp<ViewStyle>;
  textColorValue?: ColorValue;
}

export const CustomButton: React.FC<ICustomButtonProps> = ({
  title,
  onPress,
  textType,
  buttonType,
  textSize,
  rightIcon,
  leftIcon,
  isLoading,
  loaderColor,
  bgWhite,
  bgDeemWhite,
  bgRed,
  bgBlack,
  bgGray,
  bgDarkGray,
  textWhite,
  textDeemWhite,
  textRed,
  textBlack,
  textGray,
  textDarkGray,
  style,
  textColorValue,
}) => {
  const { getTextColor } = useCustomText();
  const { getButtonColor } = useCustomButton();
  const textColor = getTextColor(
    textWhite,
    textDeemWhite,
    textRed,
    textBlack,
    textGray,
    textDarkGray
  );
  const btnBgColor = getButtonColor(
    bgWhite,
    bgDeemWhite,
    bgRed,
    bgBlack,
    bgGray,
    bgDarkGray
  );
  return (
    <>
      {buttonType === "Solid" ? (
        <TouchableOpacity
          onPress={onPress}
          style={[
            buttonStyles.container,
            {
              backgroundColor: btnBgColor,
              borderRadius: moderateScale(32),
            },
            style,
          ]}
          disabled={isLoading}>
          {isLoading ? (
            <Loader size='small' color={String(loaderColor)} />
          ) : (
            <>
              {leftIcon && leftIcon}
              <CustomText
                size={textSize ? textSize : moderateScale(14)}
                type={textType}
                style={{ color: textColor || textColorValue }}>
                {title}
              </CustomText>
              {rightIcon && rightIcon}
            </>
          )}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onPress}
          style={[
            buttonStyles.container,
            {
              borderRadius: moderateScale(32),
              borderColor: btnBgColor,
              borderWidth: moderateScale(2),
            },
            style,
          ]}
          disabled={isLoading}>
          {isLoading ? (
            <Loader size='small' color={String(loaderColor)} />
          ) : (
            <>
              {leftIcon && leftIcon}
              <CustomText
                size={textSize ? textSize : moderateScale(14)}
                type={textType}
                style={{
                  color: textColor || textColorValue,
                }}>
                {title}
              </CustomText>
              {rightIcon && rightIcon}
            </>
          )}
        </TouchableOpacity>
      )}
    </>
  );
};

const buttonStyles = StyleSheet.create({
  container: {
    width: "95%",
    paddingVertical: moderateScale(15),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: moderateScale(5),
  },
});
