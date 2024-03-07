import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import PetsHome from '../components/PetsHome';
import Qct from '../components/QCT';
import AboutUs from '../components/AboutUs';
import ServicesList from '../components/ServicesList';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
SplashScreen.preventAutoHideAsync();
export default function Page() {
  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <PetsHome />
        <Qct />
        <AboutUs />
        <ServicesList />
        <ContactUs />
        <Footer />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#ffff',
  },
});
