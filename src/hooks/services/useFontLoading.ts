import { useState } from "react";
import * as Fonts from "expo-font";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

export const useFontLoading = () => {
  const [isLoadingFontComplete, setIsLoadingFontComplete] =
    useState<boolean>(false);
  /**
   * @returns boolean value true or false to determine if fonts is done loading or not
   */
  const loadResourcesAndDataAsync = async () => {
    setIsLoadingFontComplete(false);
    try {
      await Fonts.loadAsync({
        "roboto-300-light": Roboto_300Light,
        "roboto-400-regular": Roboto_400Regular,
        "roboto-500-medium": Roboto_500Medium,
        "roboto-700-bold": Roboto_700Bold,
        "roboto-900-black": Roboto_900Black,
      });
      setIsLoadingFontComplete(true);
    } catch (error) {
      console.warn(error);
      setIsLoadingFontComplete(false);
    }
  };

  return {
    loadResourcesAndDataAsync,
    isLoadingFontComplete,
  };
};
