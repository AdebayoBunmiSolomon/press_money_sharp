import { Header, ProductCard } from "@src/common";
import { CustomButton, CustomInput, CustomText } from "@src/components/shared";
import { carsForSale } from "@src/constants/home";
import { bottomTabScreenNames } from "@src/navigation/navigation-names";
import { colors } from "@src/resources/colors/colors";
import { DVH, DVW, moderateScale } from "@src/resources/scaling";
import { BottomTabBarScreenProps } from "@src/router/types";
import { ScrollContainer } from "@src/screens/Scroll-Container";
import { StatusBar } from "expo-status-bar";
import { ArrowRight } from "lucide-react-native";
import React, { useRef, useState } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Home = ({
  navigation,
}: BottomTabBarScreenProps<bottomTabScreenNames.HOME>) => {
  const [search, setSearch] = useState<string>("");
  const scrollRef = useRef<ScrollView>(null); // Reference for ScrollView
  return (
    <>
      <StatusBar backgroundColor={colors.white} />
      <SafeAreaView style={styles.mainContainer}>
        <Header onPressBackArrow={() => {}} />
        <ScrollContainer
          ref={scrollRef}
          setScreenScroll={(index) => {}}
          style={{
            paddingHorizontal: moderateScale(5),
            paddingBottom: DVH(10),
          }}>
          <View style={styles.bannerTitle}>
            <CustomText textWhite size={30} type='Medium'>
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
          <View style={styles.textInputContainer}>
            <CustomInput
              placeholder='search'
              searchInput
              value={search}
              onChangeText={(value) => setSearch(value)}
              type='custom'
              style={styles.input}
              textInputStyle={styles.textInputStyle}
            />
            <CustomButton
              title='Explore'
              onPress={() => {}}
              bgWhite
              textBlack
              textType='Medium'
              buttonType='Solid'
              style={{ width: "30%", borderRadius: moderateScale(15) }}
            />
          </View>
          <CustomText type='Medium' size={18} textWhite>
            Cars for Sales
          </CustomText>
          <View style={styles.prodItemContainer}>
            <ProductCard
              data={carsForSale.slice(0, 2)}
              onLikeItem={(itemId) => {}}
              onPressItem={(itemId) => {}}
            />
          </View>
          <CustomButton
            title='See more'
            onPress={() => {
              navigation.navigate(bottomTabScreenNames.CATEGORY);
            }}
            bgWhite
            textBlack
            textType='Medium'
            buttonType='Solid'
            style={{
              width: "30%",
              borderRadius: moderateScale(7),
              paddingVertical: moderateScale(5),
              marginVertical: moderateScale(10),
              alignSelf: "flex-end",
            }}
            rightIcon={
              <ArrowRight color={"#1A2127"} size={moderateScale(17)} />
            }
          />
        </ScrollContainer>
      </SafeAreaView>
    </>
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
  input: {
    backgroundColor: "transparent",
    borderWidth: DVW(0.2),
    borderColor: colors.white,
  },
  textInputStyle: {
    color: colors.white,
  },
  textInputContainer: {
    gap: moderateScale(10),
    alignItems: "center",
  },
  prodItemContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: moderateScale(5),
  },
});
