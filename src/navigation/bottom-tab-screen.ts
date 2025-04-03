import { bottomTabScreenTypes } from "@src/types/types";
import { bottomTabScreenNames } from "./navigation-names";
import { Home, Category, WishList, Profile } from "@src/screens/app/bottom-tab";
import { HomeStack } from "@src/router/screen-stack";

export const bottomTabScreens: bottomTabScreenTypes[] = [
  {
    screenName: "HomeStack",
    component: HomeStack,
  },
  {
    screenName: bottomTabScreenNames.CATEGORY,
    component: Category,
  },
  {
    screenName: bottomTabScreenNames.WISH_LIST,
    component: WishList,
  },
  {
    screenName: bottomTabScreenNames.PROFILE,
    component: Profile,
  },
];
