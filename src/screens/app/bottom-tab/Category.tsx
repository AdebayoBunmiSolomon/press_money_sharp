import { Header, ProductCard } from "@src/common";
import { CustomButton } from "@src/components/shared";
import { carsForSale } from "@src/constants/home";
import { bottomTabScreenNames } from "@src/navigation/navigation-names";
import { colors } from "@src/resources/colors/colors";
import { DVH, moderateScale } from "@src/resources/scaling";
import { BottomTabBarScreenProps } from "@src/router/types";
import { ScrollContainer } from "@src/screens/Scroll-Container";
import { StatusBar } from "expo-status-bar";
import { ArrowUp, ChevronsUpDown, Funnel } from "lucide-react-native";
import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Category = ({
  navigation,
}: BottomTabBarScreenProps<bottomTabScreenNames.CATEGORY>) => {
  const [screenScroll, setScreenScroll] = useState<number>(0);
  const scrollRef = useRef<ScrollView>(null); // Reference for ScrollView

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <>
      <StatusBar backgroundColor={colors.red} />
      <SafeAreaView style={styles.mainContainer}>
        <Header
          onPressBackArrow={() => navigation.goBack()}
          containerStyle={styles.headerContainerStyle}
          showBackArrow
          title='Cars for Sales'
          textColor={colors.white}
        />
        <View style={styles.actionBtnContainer}>
          <CustomButton
            title='Filters'
            onPress={() => {}}
            bgWhite
            textBlack
            textType='Medium'
            buttonType='Outline'
            rightIcon={<Funnel color={colors.black} size={moderateScale(15)} />}
            style={styles.filterBtn}
          />
          <CustomButton
            title='Other Services'
            onPress={() => {}}
            bgWhite
            textWhite
            textType='Medium'
            buttonType='Solid'
            rightIcon={
              <ChevronsUpDown color={colors.white} size={moderateScale(20)} />
            }
            style={styles.otherServicesBtn}
          />
        </View>
        <ScrollContainer
          ref={scrollRef} // Attach ref
          style={styles.scrollContainer}
          setScreenScroll={(index) => setScreenScroll(index)}>
          <View style={styles.prodItemContainer}>
            <ProductCard
              data={carsForSale}
              onLikeItem={(itemId) => {}}
              onPressItem={(itemId) => {}}
              showLocation
            />
          </View>
        </ScrollContainer>
      </SafeAreaView>
      {screenScroll > 1 && (
        <View style={styles.arrowUpContainer}>
          <TouchableOpacity
            style={styles.arrowUpBtn}
            onPress={() => scrollToTop()}>
            <ArrowUp color={colors.black} size={moderateScale(25)} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.cream,
    flex: 1,
  },
  headerContainerStyle: {
    backgroundColor: colors.red,
  },
  actionBtnContainer: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  filterBtn: {
    width: "47%",
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(7),
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(10),
    borderColor: colors.red,
  },
  otherServicesBtn: {
    width: "47%",
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(9),
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(10),
    backgroundColor: colors.red,
  },
  scrollContainer: {
    paddingHorizontal: moderateScale(5),
    paddingBottom: DVH(15),
  },
  prodItemContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: moderateScale(5),
  },
  arrowUpContainer: {
    position: "absolute",
    bottom: moderateScale(20),
    right: moderateScale(10),
    width: "100%",
    alignItems: "flex-end",
  },
  arrowUpBtn: {
    padding: moderateScale(10),
    borderRadius: moderateScale(100),
    backgroundColor: colors.white,

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    // Shadow for Android
    elevation: 5,
  },
});
