import { useFontLoading } from "@src/hooks/services";
import { Router } from "@src/router/router";
import { AppLoader } from "@src/screens/App-Loader";
import { useEffect } from "react";
import {
  Platform,
  StyleSheet,
  View,
  StatusBar as RNStatusBar,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { colors } from "@src/resources/colors/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
      {Platform.OS === "ios" ? (
        <RNStatusBar backgroundColor={"#052C22"} />
      ) : (
        <StatusBar
          style='dark'
          backgroundColor={isLoadingFontComplete ? colors.white : colors.red}
        />
      )}
      <SafeAreaProvider>
        {!isLoadingFontComplete ? <AppLoader /> : <Router />}
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
