import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Header, ProductCard } from "@src/common";
import { CustomInput } from "@src/components/shared";
import { colors } from "@src/resources/colors/colors";
import { DVH, DVW, moderateScale } from "@src/resources/scaling";
import { RootStackParamList } from "@src/router/types";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollContainer } from "../Scroll-Container";
import { carsForSale } from "@src/constants/home";
import { ArrowUp } from "lucide-react-native";

export const CarsForHire = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [search, setSearch] = useState<string>("");
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
          textColor={colors.white}
          onPressHamBuggerBtn={() => {}}
          title='Cars For Hire'
        />
        <View style={styles.subContainer}>
          <CustomInput
            placeholder='search'
            searchInput
            value={search}
            onChangeText={(value) => setSearch(value)}
            type='custom'
            style={styles.input}
            textInputStyle={styles.textInputStyle}
            placeHolderColor={colors.black}
          />
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
        </View>
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
  subContainer: {
    paddingHorizontal: moderateScale(10),
  },
  headerContainerStyle: {
    backgroundColor: colors.red,
  },
  input: {
    backgroundColor: "transparent",
    borderWidth: DVW(0.2),
    borderColor: colors.red,
  },
  textInputStyle: {
    color: colors.black,
  },
  scrollContainer: {
    paddingBottom: DVH(15),
    paddingTop: moderateScale(10),
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
