import { NavigationProp, useNavigation } from "@react-navigation/native";
import { CustomText } from "@src/components/shared";
import { otherService } from "@src/constants/home";
import { colors } from "@src/resources/colors/colors";
import { moderateScale } from "@src/resources/scaling";
import { BottomTabBarStackParamList } from "@src/router/types";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export const OtherServices: React.FC<{}> = () => {
  const navigation: NavigationProp<BottomTabBarStackParamList> =
    useNavigation();
  return (
    <View
      style={{
        paddingVertical: moderateScale(10),
        width: "100%",
        borderRadius: moderateScale(10),
        paddingHorizontal: moderateScale(10),
        backgroundColor: colors.red,
        marginTop: moderateScale(40),
        zIndex: 100,
        position: "absolute",
      }}>
      {otherService &&
        otherService.map((item, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item?.screen)}
            key={index}
            style={{
              paddingVertical: moderateScale(7),
            }}>
            <CustomText
              type='Medium'
              size={14}
              textWhite
              style={{
                textAlign: "center",
              }}>
              {item?.list}
            </CustomText>
          </TouchableOpacity>
        ))}
    </View>
  );
};
