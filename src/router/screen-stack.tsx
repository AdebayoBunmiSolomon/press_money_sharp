import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { appScreenNames, bottomTabScreenNames } from "@src/navigation";
import { Home } from "@src/screens/app/bottom-tab";
import {
  CarsForHire,
  ConsultationService,
  DealersDeal,
  HomeHeader,
  SpareParts,
} from "@src/screens/app";

const Stack = createNativeStackNavigator<RootStackParamList>();
export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={bottomTabScreenNames.HOME} component={Home} />
      <Stack.Screen name={appScreenNames.HOME_HEADER} component={HomeHeader} />
      <Stack.Screen
        name={appScreenNames.DEALERS_DEAL}
        component={DealersDeal}
      />
      <Stack.Screen
        name={appScreenNames.CARS_FOR_HIRE}
        component={CarsForHire}
      />
      <Stack.Screen name={appScreenNames.SPARE_PARTS} component={SpareParts} />
      <Stack.Screen
        name={appScreenNames.CONSULTATION_SERVICE}
        component={ConsultationService}
      />
    </Stack.Navigator>
  );
};
