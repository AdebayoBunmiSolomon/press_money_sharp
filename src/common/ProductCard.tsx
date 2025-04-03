import { CustomText } from "@src/components/shared";
import { formatAmountWithCommas } from "@src/helper/helper";
import { colors } from "@src/resources/colors/colors";
import { DVH, moderateScale } from "@src/resources/scaling";
import { carsForSaleType } from "@src/types/types";
import { Heart, MapPin } from "lucide-react-native";
import React from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";

interface IProductCardProps {
  data: carsForSaleType;
  onPressItem: (itemId: number, itemName: string) => void;
  onLikeItem: (itemId: number, itemName: string) => void;
  showLocation?: boolean;
}

export const ProductCard: React.FC<IProductCardProps> = ({
  data,
  onPressItem,
  onLikeItem,
  showLocation,
}) => {
  return (
    <>
      {data &&
        data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cardContainer}
            onPress={() => onPressItem(item?.id, item?.name)}>
            <View style={styles.cardImgContainer}>
              <Image
                source={item?.image}
                style={styles.cardImg}
                resizeMode='stretch'
              />
            </View>
            <View
              style={{
                // paddingVertical: moderateScale(10),
                paddingTop: moderateScale(10),
                gap: moderateScale(5),
              }}>
              <CustomText type='Medium' size={12} style={{ color: "#1A2127" }}>
                {item?.name}
              </CustomText>
              <CustomText type='Medium' size={12} style={{ color: colors.red }}>
                #{formatAmountWithCommas(item?.price)}.00
              </CustomText>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: moderateScale(10),
                  }}>
                  <CustomText
                    type='Medium'
                    size={9}
                    style={{ color: "#1A2127" }}>
                    {item?.usedType} Used
                  </CustomText>
                  <CustomText
                    type='Medium'
                    size={9}
                    style={{ color: "#1A2127" }}>
                    {item?.carType}
                  </CustomText>
                </View>
                <TouchableOpacity
                  style={{ padding: moderateScale(5) }}
                  onPress={() => onLikeItem(item?.id, item?.name)}>
                  <Heart
                    color={colors.red}
                    size={moderateScale(20)}
                    strokeWidth={1.2}
                  />
                </TouchableOpacity>
              </View>
              {showLocation && (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: moderateScale(5),
                  }}>
                  <MapPin color={"#1A2127"} size={moderateScale(10)} />
                  <CustomText
                    type='Regular'
                    size={9}
                    style={{ color: "#1A2127" }}>
                    {item?.location}
                  </CustomText>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: moderateScale(5),
    paddingBottom: moderateScale(20),
    paddingHorizontal: moderateScale(5),
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    width: "48%",
  },
  cardImgContainer: {
    width: "100%",
    height: DVH(15),
    borderRadius: moderateScale(10),
  },
  cardImg: {
    width: "100%",
    height: "100%",
  },
});
