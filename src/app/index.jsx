import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import PetsHome from "../components/PetsHome";
import useCustomFonts from "../hooks/useCustomFonts";

export default function Page() {
  const { onLayoutRootView } = useCustomFonts({
    // "FiraSans-Bold": require("../../../assets/fonts/Fira_Sans/FiraSans-Bold.ttf"),
    // "FiraSans-Semibold": require("../../../assets/fonts/Fira_Sans/FiraSans-Semibold.ttf"),
    // "FiraSans-Medium": require("../../../assets/fonts/Fira_Sans/FiraSans-Medium.ttf"),
    "FiraSans-Regular": require("../../assets/fonts/Fira_Sans/FiraSans-Regular.ttf"),
    "Montserrat-Bold": require("../../assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
    "Montserrat-SemiBold": require("../../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf"),
    "Montserrat-Medium": require("../../assets/fonts/Montserrat/static/Montserrat-Medium.ttf"),
    // "Montserrat-Regular": require("../../../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
  });

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
    borderColor: "green",
    borderWidth: 1,
    paddingHorizontal: 20,
  },
});
