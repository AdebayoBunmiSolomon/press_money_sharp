import { Header } from "@src/common";
import { carsForSale } from "@src/constants/home";
import { appScreenNames } from "@src/navigation";
import { colors } from "@src/resources/colors/colors";
import { DVH, DVW, moderateScale } from "@src/resources/scaling";
import { RootStackScreenProps } from "@src/router/types";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollContainer } from "../Scroll-Container";
import { CustomButton, CustomText } from "@src/components/shared";
import { formatAmountWithCommas } from "@src/helper/helper";
import { Heart, MapPin } from "lucide-react-native";
import {
  CallModal,
  MessageModal,
  WhatsAppModal,
} from "@src/components/app/product-detail";

const productDetailActions = ["Call", "Message", "WhatsApp"];

type actionModalType = {
  call: boolean;
  message: boolean;
  whatsApp: boolean;
};

export const ProductDetail = ({
  navigation,
  route,
}: RootStackScreenProps<appScreenNames.PRODUCT_DETAIL>) => {
  const [actionModal, setActionModal] = useState<actionModalType>({
    call: false,
    message: false,
    whatsApp: false,
  });
  const { productTitle, productId } = route?.params;
  const [productData, setProductData] = useState<any>(null);
  useEffect(() => {
    const getProduct = () => {
      const filteredProduct =
        carsForSale && carsForSale.filter((item) => item.id === productId);
      if (filteredProduct) {
        setProductData(filteredProduct[0]);
        console.log(filteredProduct);
      } else {
        setProductData(null);
      }
    };
    getProduct();
  }, [productId]);
  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <Header
          onPressBackArrow={() => navigation.goBack()}
          containerStyle={styles.headerContainerStyle}
          showBackArrow
          textColor={colors.white}
          onPressHamBuggerBtn={() => {}}
          title={productTitle && productTitle}
        />
        <ScrollContainer
          setScreenScroll={() => {}}
          style={styles.scrollContainer}>
          <View style={styles.prodImgContainer}>
            <Image
              source={productData?.image}
              style={styles.prodImg}
              resizeMode='cover'
            />
            <View style={styles.productContentContainer}>
              <CustomText type='Semi-Bold' size={16} textBlack>
                {productData?.name}
              </CustomText>
              <CustomText type='Semi-Bold' size={14} textRed>
                #{formatAmountWithCommas(Number(productData?.price))}
              </CustomText>
              <CustomText type='Medium' size={16} textDarkGray>
                {productData?.usedType} Used | {productData?.carType}
              </CustomText>
            </View>
          </View>
          <View style={styles.otherInfoContainer}>
            <View style={styles.locationContainer}>
              <MapPin color={"#1A2127"} size={moderateScale(14)} />
              <CustomText type='Regular' size={14} style={{ color: "#1A2127" }}>
                {productData?.location}
              </CustomText>
            </View>
            <View style={styles.locationContainer}>
              <CustomText type='Regular' size={14} style={{ color: "#1A2127" }}>
                Add to Wishlist
              </CustomText>
              <TouchableOpacity
                style={{ padding: moderateScale(5) }}
                onPress={() => {}}>
                <Heart
                  color={colors.red}
                  size={moderateScale(20)}
                  strokeWidth={1.2}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.actionBtn}>
            {productDetailActions &&
              productDetailActions.map((item, index) => (
                <CustomButton
                  key={index}
                  title={item}
                  textType='Medium'
                  buttonType='Solid'
                  textWhite
                  style={{
                    width: "25%",
                    paddingVertical: moderateScale(5),
                    borderRadius: moderateScale(5),
                  }}
                  bgRed
                  onPress={() => {
                    if (item === "Call") {
                      setActionModal({
                        ...actionModal,
                        call: !actionModal.call,
                      });
                    } else if (item === "Message") {
                      setActionModal({
                        ...actionModal,
                        message: !actionModal.message,
                      });
                    } else if (item === "WhatsApp") {
                      setActionModal({
                        ...actionModal,
                        whatsApp: !actionModal.whatsApp,
                      });
                    }
                  }}
                />
              ))}
          </View>
          <View
            style={{
              paddingHorizontal: moderateScale(10),
              paddingVertical: moderateScale(10),
            }}>
            <CustomText
              type='Semi-Bold'
              size={16}
              textBlack
              style={styles.summaryText}>
              Specification Summary
            </CustomText>
            <View style={styles.specificationContainer}>
              <View
                style={{
                  width: "50%",
                }}>
                <CustomText type='Semi-Bold' size={14} textBlack>
                  {productData?.make}
                </CustomText>
                <CustomText type='Medium' size={12} textBlack>
                  Make
                </CustomText>
              </View>
              <View>
                <CustomText type='Semi-Bold' size={14} textBlack>
                  {productData?.model}
                </CustomText>
                <CustomText type='Medium' size={12} textBlack>
                  Model
                </CustomText>
              </View>
            </View>
            <View style={styles.specificationContainer}>
              <View
                style={{
                  width: "50%",
                }}>
                <CustomText type='Semi-Bold' size={14} textBlack>
                  {productData?.millage}
                </CustomText>
                <CustomText type='Medium' size={12} textBlack>
                  Millage
                </CustomText>
              </View>
              <View>
                <CustomText type='Semi-Bold' size={14} textBlack>
                  {productData?.year}
                </CustomText>
                <CustomText type='Medium' size={12} textBlack>
                  Year of Manufacture
                </CustomText>
              </View>
            </View>
            <View style={styles.specificationContainer}>
              <View
                style={{
                  width: "50%",
                }}>
                <CustomText type='Semi-Bold' size={14} textBlack>
                  {productData?.trim}
                </CustomText>
                <CustomText type='Medium' size={12} textBlack>
                  Trim
                </CustomText>
              </View>
              <View>
                <CustomText type='Semi-Bold' size={14} textBlack>
                  {productData?.condition}
                </CustomText>
                <CustomText type='Medium' size={12} textBlack>
                  Condition
                </CustomText>
              </View>
            </View>
            <View style={styles.specificationContainer}>
              <View
                style={{
                  width: "50%",
                }}>
                <CustomText type='Semi-Bold' size={14} textBlack>
                  {productData?.color}
                </CustomText>
                <CustomText type='Medium' size={12} textBlack>
                  Color
                </CustomText>
              </View>
              <View>
                <CustomText type='Semi-Bold' size={14} textBlack>
                  {productData?.interior}
                </CustomText>
                <CustomText type='Medium' size={12} textBlack>
                  Interior
                </CustomText>
              </View>
            </View>
          </View>
        </ScrollContainer>
        {actionModal.call && (
          <CallModal
            visible={actionModal.call}
            onCloseModal={() =>
              setActionModal({
                ...actionModal,
                call: !actionModal.call,
              })
            }
          />
        )}
        {actionModal.message && (
          <MessageModal
            visible={actionModal.message}
            onCloseModal={() =>
              setActionModal({
                ...actionModal,
                message: !actionModal.message,
              })
            }
          />
        )}

        {actionModal.whatsApp && (
          <WhatsAppModal
            visible={actionModal.whatsApp}
            onCloseModal={() =>
              setActionModal({
                ...actionModal,
                whatsApp: !actionModal.whatsApp,
              })
            }
          />
        )}
      </SafeAreaView>
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
  prodImgContainer: {
    width: "95%",
    paddingBottom: DVH(2),
    alignSelf: "center",
    borderRadius: moderateScale(10),
    overflow: "hidden",
    marginVertical: moderateScale(10),
    backgroundColor: colors.white,
  },
  prodImg: {
    height: DVH(40),
    width: "100%",
  },
  scrollContainer: {
    paddingBottom: DVH(10),
  },
  productContentContainer: {
    paddingHorizontal: moderateScale(5),
    paddingVertical: moderateScale(10),
    gap: moderateScale(10),
  },
  otherInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(5),
    paddingHorizontal: moderateScale(10),
  },
  actionBtn: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
  },
  summaryText: {
    paddingBottom: moderateScale(5),
    borderBottomWidth: DVW(0.2),
    borderBottomColor: colors.darkGray,
  },
  specificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "flex-start",
    paddingVertical: moderateScale(10),
  },
  text: {
    textAlign: "left",
  },
});
