import React from "react";
import { Screen } from "./Screen";
import {
  DVH,
  DVW,
  moderateScale,
  screeWindowWidth,
  screenWindowHeight,
} from "@src/resources/scaling";
import { Loader } from "@src/common";
import { colors } from "@src/resources/colors/colors";
import { Image, Platform, StyleSheet, View } from "react-native";

export const AppLoader = () => {
  return (
    <>
      <Screen
        bgColor={colors.white}
        style={{
          width: screeWindowWidth,
          height: screenWindowHeight,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Image
          source={require("@src/assets/png/icon.png")}
          resizeMode='center'
          style={loaderStyles.appIcon}
        />
      </Screen>
      <View style={loaderStyles.container}>
        <Loader size='large' color={colors.red} />
      </View>
    </>
  );
};

const loaderStyles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? moderateScale(10) : moderateScale(20),
    width: "100%",
    alignSelf: "center",
  },
  appIcon: {
    height: "100%",
    width: DVW(40),
    alignSelf: "center",
  },
});
