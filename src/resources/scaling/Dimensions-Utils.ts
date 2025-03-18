import { Dimensions, PixelRatio, Platform } from "react-native";

export const screenWindowHeight = Dimensions.get("window").height;
export const screeWindowWidth = Dimensions.get("window").width;

// based on iphone 5s's scale
export const scale = screeWindowWidth / 320;

export const guidelineBaseWidth = 350;
export const guidelineBaseHeight = 680;

export const scaleSize = (size: number) =>
  (screeWindowWidth / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (screenWindowHeight / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scaleSize(size) - size) * factor;

export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
