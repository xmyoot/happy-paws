import { Image, StyleSheet, Text, View } from 'react-native';
import kitties from '../../../assets/images/kittens-playing-on-a-cat-tree-2023-11-27-05-05-59-utc.jpg';

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <Image
        source={kitties}
        style={styles.image}
        onLayout={() => {
          return 'Loading...';
        }}
      />
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.welcome}>
        Welcome to Happy Paws Pet Hotel, where pets find comfort, care, and
        companionship. Founded with a passion for animals, we provide a loving
        and safe environment for your furry family members.
        {'\n'}
        {'\n'}
        At Happy Paws, we prioritize your pet's well-being, offering spacious
        accommodations, supervised play sessions, and professional grooming
        services. Whether it's a day of daycare or an extended stay, your pet
        will be treated with love and attention by our dedicated team of animal
        lovers.
      </Text>
      <Text style={styles.join}>
        {'\n'}
        Join the Happy Paws family, where tails wag and hearts are happy!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 51,
    paddingBottom: 60,
    alignItems: 'center',
  },
  image: {
    width: 352,
    height: 353,
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 36,
    paddingTop: 27,
    paddingBottom: 11,
  },
  welcome: {
    fontFamily: 'FiraSans_400Regular',
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'top',
  },
  join: {
    fontFamily: 'FiraSans_600SemiBold',
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'top',
  },
});
