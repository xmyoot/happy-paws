import { useCallback } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  FiraSans_400Regular,
  FiraSans_500Medium,
  FiraSans_600SemiBold,
  FiraSans_700Bold,
} from "@expo-google-fonts/fira-sans";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";
import PetsHome from "../components/PetsHome";

SplashScreen.preventAutoHideAsync();
export default function Page() {
  const [fontsLoaded, fontError] = useFonts({
    FiraSans_400Regular,
    FiraSans_500Medium,
    FiraSans_600SemiBold,
    FiraSans_700Bold,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayoutRootView}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <PetsHome />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
  },
});
