import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppStack } from "./app-stack";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

export const Router = () => {
  return (
    <>
      <NavigationContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.container}>
          <AppStack />
        </KeyboardAvoidingView>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
