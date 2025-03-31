import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { appScreenNames, bottomTabScreenNames } from "@src/navigation";
import { HomeHeader } from "@src/screens/app/HomeHeader";
import { Home } from "@src/screens/app/bottom-tab";

const Stack = createNativeStackNavigator<RootStackParamList>();
export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={bottomTabScreenNames.HOME} component={Home} />
      <Stack.Screen name={appScreenNames.HOME_HEADER} component={HomeHeader} />
    </Stack.Navigator>
  );
};
