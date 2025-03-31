import { moderateScale } from "@src/resources/scaling";
import { Car, Eye, Heart, Users, Wrench } from "lucide-react-native";

export const renderHomeHeaderIcon = (listName: string) => {
  if (listName.toLowerCase().includes("category")) {
    return <Car size={moderateScale(15)} color={"#1A2127CC"} />;
  } else if (listName.toLowerCase().includes("car sales")) {
    return <Car size={moderateScale(15)} color={"#1A2127CC"} />;
  } else if (listName.toLowerCase().includes("car hire")) {
    return <Car size={moderateScale(15)} color={"#1A2127CC"} />;
  } else if (listName.toLowerCase().includes("spare parts")) {
    return <Wrench size={moderateScale(15)} color={"#1A2127CC"} />;
  } else if (listName.toLowerCase().includes("consultation services")) {
    return <Users size={moderateScale(15)} color={"#1A2127CC"} />;
  } else if (listName.toLowerCase().includes("dealers deal")) {
    return <Car size={moderateScale(15)} color={"#1A2127CC"} />;
  } else if (listName.toLowerCase().includes("wishlist")) {
    return <Heart size={moderateScale(15)} color={"#1A2127CC"} />;
  } else if (listName.toLowerCase().includes("recently viewed")) {
    return <Eye size={moderateScale(15)} color={"#1A2127CC"} />;
  }
};
