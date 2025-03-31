import React, { forwardRef } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  StyleProp,
  ViewStyle,
} from "react-native";

const { height } = Dimensions.get("window"); // Get screen height

interface IScrollContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  vertical?: boolean;
  setScreenScroll: (value: number) => void;
}

// Make ScrollContainer forward ref
export const ScrollContainer = forwardRef<ScrollView, IScrollContainerProps>(
  ({ children, style, vertical, setScreenScroll }, ref) => {
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const yOffset = event.nativeEvent.contentOffset.y;
      const index = Math.round(yOffset / height); // Calculate the current screen index
      setScreenScroll(index);
    };

    return (
      <KeyboardAvoidingView
        style={[{ height: "100%" }, style]}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : undefined}>
        <ScrollView
          ref={ref} // Attach ref
          horizontal={vertical ? true : false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={style}
          scrollEventThrottle={16}
          onScroll={handleScroll}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
);
