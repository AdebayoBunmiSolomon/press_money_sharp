import { CustomText } from "@src/components/shared";
import { colors } from "@src/resources/colors/colors";
import { DVH, DVW, moderateScale } from "@src/resources/scaling";
import { AlignJustify, ArrowLeft } from "lucide-react-native";
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ColorValue,
  StyleProp,
  ViewStyle,
} from "react-native";

interface IHeaderProps {
  showBackArrow?: boolean;
  title?: string;
  textColor?: ColorValue;
  containerStyle?: StyleProp<ViewStyle>;
  onPressBackArrow: () => void;
}

export const Header: React.FC<IHeaderProps> = ({
  showBackArrow,
  title,
  textColor,
  containerStyle,
  onPressBackArrow,
}) => {
  return (
    <View style={[styles.topContainer, containerStyle]}>
      {showBackArrow ? (
        <TouchableOpacity
          onPress={() => onPressBackArrow()}
          style={styles.hamBuggerBtn}>
          <ArrowLeft size={moderateScale(20)} color={colors.black} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      {title ? (
        <CustomText
          type='Medium'
          size={18}
          style={{
            color: textColor,
          }}>
          {title}
        </CustomText>
      ) : (
        <Image
          source={require("@src/assets/png/icon.png")}
          resizeMode='contain'
          style={styles.appIcon}
        />
      )}
      <TouchableOpacity style={styles.hamBuggerBtn}>
        <AlignJustify size={moderateScale(20)} color={colors.black} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: colors.white,
    height: DVH(15),
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(10),
    alignItems: "center",
  },
  appIcon: {
    height: DVH(15),
    width: DVW(30),
  },
  hamBuggerBtn: {
    padding: moderateScale(10),
  },
});
