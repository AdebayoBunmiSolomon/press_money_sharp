import { bottomTabScreenNames } from "@src/navigation/navigation-names";
import { BottomTabBarScreenProps } from "@src/router/types";
import { Screen } from "@src/screens/Screen";
import React from "react";
import { Text } from "react-native";

export const WishList =
  ({}: BottomTabBarScreenProps<bottomTabScreenNames.WISH_LIST>) => {
    return (
      <Screen>
        <Text>WishList</Text>
      </Screen>
    );
  };
