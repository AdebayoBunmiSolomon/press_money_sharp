import { Header } from "@src/common";
import { CustomText } from "@src/components/shared";
import { bottomTabScreenNames } from "@src/navigation/navigation-names";
import { colors } from "@src/resources/colors/colors";
import { DVH, DVW, moderateScale } from "@src/resources/scaling";
import { BottomTabBarScreenProps } from "@src/router/types";
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Home =
  ({}: BottomTabBarScreenProps<bottomTabScreenNames.HOME>) => {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Header onPressBackArrow={() => {}} />
        <View style={styles.bannerTitle}>
          <CustomText
            textWhite
            size={30}
            type='Medium'
            style={{
              paddingLeft: moderateScale(10),
            }}>
            {"Drive Your Dream,\nAnytime,\nAnywhere"}
          </CustomText>
          <View style={styles.carIconContainer}>
            <Image
              source={require("@src/assets/png/car.png")}
              resizeMode='cover'
              style={styles.carIcon}
            />
          </View>
        </View>
        <View style={styles.screenContainer}>
          <CustomText
            type='Regular'
            size={14}
            textWhite
            style={{
              lineHeight: moderateScale(20),
            }}>
            From buying your perfect ride to renting one for the road, we've got
            you covered. Need expert repairs or quality spare parts? We make car
            care effortless.
          </CustomText>
        </View>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.red,
    flex: 1,
  },
  bannerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  carIconContainer: {
    height: DVH(25),
    width: DVW(50),
    marginLeft: moderateScale(-80),
  },
  carIcon: {
    width: "100%",
    height: "100%",
  },
  screenContainer: {
    paddingHorizontal: moderateScale(10),
  },
});
