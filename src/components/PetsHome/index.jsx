import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import banner from '../../../assets/images/group-of-kittens-and-puppies-sitting-isolated-on-2023-11-27-04-51-32-utc.jpg';

export default function PetsHome() {
  const handleNavigateToServices = () => {
    router.push('services');
  };

  return (
    <View style={styles.container}>
      <Image source={banner} style={styles.image} />
      <Text style={styles.title}>Your Pet&rsquo;s Home Away from Home</Text>
      <View style={styles.textWrapper}>
        <Text style={styles.welcome}>Welcome to Happy Paws,</Text>
        <Text style={styles.description}>
          where luxury meets comfort for your beloved pets! Whether you're going
          away for a day or an extended vacation, trust us to provide top-notch
          care and accommodation for your furry friends.
        </Text>
      </View>
      <Text style={styles.footerText}>Making Tails Wag & Hearts Happy</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleNavigateToServices}
      >
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 14,
    width: '100%',
    marginBottom: 60,
  },
  image: {
    width: 400,
    height: 240,
    alignSelf: 'center',
  },
  title: {
    textAlign: 'left',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 36,
    width: 334,
  },
  welcome: {
    fontFamily: 'FiraSans_400Regular',
    fontSize: 36,
    marginTop: 14,
  },
  description: {
    fontFamily: 'FiraSans_400Regular',
    fontSize: 24,
    paddingEnd: 11,
  },
  footerText: {
    width: '100%',
    fontFamily: 'Montserrat_500Medium',
    fontSize: 30,
    marginVertical: 31,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#A189C8',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 28,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 24,
    color: '#efefef',
  },
});
