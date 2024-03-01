import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCustomFonts from "../hooks/useCustomFonts";

export default function Page() {
  const { onLayoutRootView } = useCustomFonts({
    "Montserrat-Bold": require("../../assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
    "FiraSans-Regular": require("../../assets/fonts/Fira_Sans/FiraSans-Regular.ttf"),
  });

  return (
    <SafeAreaProvider>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <View style={styles.main}>
          <Text style={styles.title}>Hello World</Text>
          <Text style={styles.subtitle}>
            This is the first page of your app.
          </Text>
          <Link href="/services" style={styles.button}>
            Go to Services Page
          </Link>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontFamily: "Montserrat-Bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
    fontFamily: "FiraSans-Regular",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
