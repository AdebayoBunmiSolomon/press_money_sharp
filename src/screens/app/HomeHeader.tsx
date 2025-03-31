import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Header } from "@src/common";
import { colors } from "@src/resources/colors/colors";
import { BottomTabBarStackParamList } from "@src/router/types";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollContainer } from "../Scroll-Container";
import { homeHeader } from "@src/constants/home";
import { CustomText } from "@src/components/shared";
import { DVH, moderateScale } from "@src/resources/scaling";
import { renderHomeHeaderIcon } from "@src/helper/jsx-helper";

export const HomeHeader = () => {
  const navigation: NavigationProp<BottomTabBarStackParamList> =
    useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        onPressBackArrow={() => navigation.goBack()}
        onPressHamBuggerBtn={() => {}}
        showBackArrow
      />
      <ScrollContainer
        style={{
          paddingBottom: DVH(10),
          paddingHorizontal: moderateScale(5),
          paddingTop: DVH(2),
        }}
        setScreenScroll={() => {}}>
        <View style={styles.headerItemContainer}>
          {homeHeader &&
            homeHeader.map((items, index) => (
              <View
                key={index}
                style={{
                  paddingVertical: moderateScale(6),
                }}>
                <CustomText type='Medium' size={16} textBlack>
                  {items?.name}
                </CustomText>
                {items?.list?.map((itemList, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.btnList}
                    onPress={() => navigation.navigate(itemList?.screen)}>
                    {renderHomeHeaderIcon(itemList?.name)}
                    <CustomText
                      type='Medium'
                      size={14}
                      style={{ color: "#1A2127CC" }}>
                      {itemList?.name}
                    </CustomText>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
        </View>
      </ScrollContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.cream,
    flex: 1,
  },
  headerItemContainer: {
    flexDirection: "column",
    gap: moderateScale(5),
  },
  btnList: {
    paddingVertical: moderateScale(7),
    borderRadius: moderateScale(10),
    backgroundColor: colors.white,
    paddingHorizontal: moderateScale(5),
    marginVertical: moderateScale(6),
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
});
