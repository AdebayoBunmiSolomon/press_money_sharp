import { colors } from "@src/resources/colors/colors";
import { useState } from "react";

interface ISelectedCountryProps {
  currency: string;
  flag: string;
}

export const useCustomInput = () => {
  const [selectedCountry, setSelectedCountry] = useState<ISelectedCountryProps>(
    {
      currency: "",
      flag: "",
    }
  );
  const getInputColor = (error: string) => {
    if (error) {
      return {
        borderColor: colors.red,
        iconColor: colors?.red,
      };
    } else {
      return {
        borderColor: "#d3cacaf5",
        iconColor: "#484848",
      };
    }
  };

  return {
    getInputColor,
    selectedCountry,
    setSelectedCountry,
  };
};
