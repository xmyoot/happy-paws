import { useCallback, useLayoutEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const useCustomFonts = (fonts) => {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded, fontError] = useFonts(fonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useLayoutEffect(() => {
    if (!fontsLoaded && !fontError) {
      return;
    }

    SplashScreen.hideAsync();
  }, [fontsLoaded, fontError]);

  return { fontsLoaded, fontError, onLayoutRootView };
};

export default useCustomFonts;

// HOW TO IMPORT FONTS
//
// {
//   "FiraSans-Bold": require("../../assets/fonts/Fira_Sans/FiraSans-Bold.ttf"),
//   "FiraSans-Semibold": require("../../assets/fonts/Fira_Sans/FiraSans-Semibold.ttf"),
//   "FiraSans-Medium": require("../../assets/fonts/Fira_Sans/FiraSans-Medium.ttf"),
// "FiraSans-Regular": require("../../assets/fonts/Fira_Sans/FiraSans-Regular.ttf"),
// "Montserrat-Bold": require("../../assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
//   "Montserrat-SemiBold": require("../../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf"),
//   "Montserrat-Medium": require("../../assets/fonts/Montserrat/static/Montserrat-Medium.ttf"),
//   "Montserrat-Regular": require("../../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
// }
