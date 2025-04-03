import {
  AuthStackParamList,
  BottomTabBarStackParamList,
  RootStackParamList,
} from "@src/router/types";
import { ImageSourcePropType } from "react-native";

export type authScreenTypes = {
  screenName: keyof AuthStackParamList;
  component: React.ComponentType<any>;
};

export type bottomTabScreenTypes = {
  screenName: keyof BottomTabBarStackParamList;
  component: React.ComponentType<any>;
};

export type appScreenTypes = {
  screenName: keyof RootStackParamList;
  component: React.ComponentType<any>;
};

export type carsForSaleType = {
  id: number;
  name: string;
  price: number;
  usedType: string;
  carType: string;
  image: ImageSourcePropType;
  location: string;
  year: string;
  make: string;
  model: string;
  millage: string;
  trim: string;
  condition: string;
  color: string;
  interior: string;
}[];

export type sparePartsSaleType = {
  id: number;
  name: string;
  price: number;
  usedType: string;
  carType: string;
  image: ImageSourcePropType;
  location: string;
  // year: string;
  // make: string;
  // model: string;
  // millage: string;
  // trim: string;
  // condition: string;
  // color: string;
  // interior: string;
}[];
