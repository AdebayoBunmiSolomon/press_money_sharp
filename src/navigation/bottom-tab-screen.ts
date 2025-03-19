import { bottomTabScreenTypes } from "@src/types/types";
import { bottomTabScreenNames } from "./navigation-names";
import { Home, Category, WishList, Profile } from "@src/screens/app/bottom-tab";

export const bottomTabScreens: bottomTabScreenTypes[] = [
  {
    screenName: bottomTabScreenNames.HOME,
    component: Home,
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
