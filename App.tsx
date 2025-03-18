import { useFontLoading } from "@src/hooks/services";
import { colors } from "@src/resources/colors/colors";
import { fontFamily } from "@src/resources/fonts";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function App() {
  const { isLoadingFontComplete, loadResourcesAndDataAsync } = useFontLoading();
  //load font family resources
  useEffect(() => {
    const timer = setTimeout(() => {
      loadResourcesAndDataAsync();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      {!isLoadingFontComplete ? (
        <ActivityIndicator size={"large"} color={colors.red} />
      ) : (
        <>
          <Text
            style={{
              fontFamily: fontFamily.bold,
            }}>
            Open up App.tsx to start working on your app!
          </Text>
          <StatusBar style='auto' />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
