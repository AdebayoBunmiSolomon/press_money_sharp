import { bottomTabScreenNames } from "@src/navigation/navigation-names";
import { BottomTabBarScreenProps } from "@src/router/types";
import { Screen } from "@src/screens/Screen";
import React from "react";
import { Text } from "react-native";

export const Category =
  ({}: BottomTabBarScreenProps<bottomTabScreenNames.CATEGORY>) => {
    return (
      <Screen>
        <Text>Category</Text>
      </Screen>
    );
  };
