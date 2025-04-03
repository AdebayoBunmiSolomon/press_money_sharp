import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { BottomTabBarStackParamList } from "./types";
import { bottomTabScreenNames } from "@src/navigation/navigation-names";
import { bottomTabScreens } from "@src/navigation";
import { DVH, moderateScale } from "@src/resources/scaling";
import { Platform, Text } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { colors } from "@src/resources/colors/colors";
import { Shapes } from "lucide-react-native";

const Tab = createBottomTabNavigator<BottomTabBarStackParamList>();

export const BottomTabStack = () => {
  const returnBottomTabTextDesc = (desc: string) => {
    if (desc.toLowerCase() === "HomeStack".toLowerCase()) {
      return "Home";
    } else if (
      desc.toLowerCase() === bottomTabScreenNames.CATEGORY.toLowerCase()
    ) {
      return "Category";
    } else if (
      desc.toLowerCase() === bottomTabScreenNames.WISH_LIST.toLowerCase()
    ) {
      return "Wishlist";
    } else if (
      desc.toLowerCase() === bottomTabScreenNames.PROFILE.toLowerCase()
    ) {
      return "Profile";
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: Platform.OS === "ios" ? DVH(10) : DVH(8),
        },
        headerShown: false,
        tabBarLabel: ({ focused }) => (
          <Text
            style={{
              fontSize: moderateScale(12),
              color: focused ? colors.red : colors.black,
            }}>
            {String(returnBottomTabTextDesc(route.name))}
          </Text>
        ),
        tabBarIcon: ({ focused }) =>
          focused && route.name === "HomeStack" ? (
            <AntDesign
              name='home'
              size={moderateScale(20)}
              color={colors.red}
            />
          ) : !focused && route.name === "HomeStack" ? (
            <AntDesign
              name='home'
              size={moderateScale(20)}
              color={colors.black}
            />
          ) : focused && route.name === bottomTabScreenNames.CATEGORY ? (
            <Shapes color={colors.red} size={moderateScale(20)} />
          ) : !focused && route.name === bottomTabScreenNames.CATEGORY ? (
            <Shapes color={colors.black} size={moderateScale(20)} />
          ) : focused && route.name === bottomTabScreenNames.WISH_LIST ? (
            <AntDesign
              name='hearto'
              size={moderateScale(20)}
              color={colors.red}
            />
          ) : !focused && route.name === bottomTabScreenNames.WISH_LIST ? (
            <AntDesign
              name='hearto'
              size={moderateScale(20)}
              color={colors.black}
            />
          ) : focused && route.name === bottomTabScreenNames.PROFILE ? (
            <FontAwesome
              name='user-circle-o'
              size={moderateScale(20)}
              color={colors.red}
            />
          ) : !focused && route.name === bottomTabScreenNames.PROFILE ? (
            <FontAwesome
              name='user-circle-o'
              size={moderateScale(20)}
              color={colors.black}
            />
          ) : undefined,
      })}
      initialRouteName={"HomeStack"}>
      {bottomTabScreens &&
        bottomTabScreens.map((screen, index) => (
          <Tab.Screen
            name={screen.screenName}
            component={screen.component}
            key={index}
          />
        ))}
    </Tab.Navigator>
  );
};
