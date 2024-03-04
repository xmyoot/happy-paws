import { Text, Image, StyleSheet, View } from 'react-native';
import DogIcon from '../../../assets/images/values-section-dog.svg';

export default function Qct() {
  const info = [
    {
      id: '1',
      icon: 'icon-dog',
      title: 'Quality',
      description: `We are committed to providing the highest quality of service, from our luxurious accommodations to our professional grooming and training programs. Every aspect of your pet's stay is carefully designed to ensure their comfort, safety, and happiness.`,
    },
    {
      id: '2',
      icon: 'icon-heart',
      title: 'Compassion',
      description: `We believe in treating every pet with the same love and care we would want for our own furry friends. From gentle handling to personalized attention, compassion is at the heart of everything we do.`,
    },
    {
      id: '3',
      icon: 'icon-cat',
      title: 'Trust',
      description: `We understand that leaving your pet in someone else's care can be a difficult decision. That's why we prioritize transparency, reliability, and open communication with our pet parents. You can trust us to always prioritize the well-being of your beloved pet.`,
    },
  ];

  return (
    <View style={styles.container}>
      {info.map((item) => {
        return (
          <View key={item.id} style={styles.infoWrapper}>
            <Text style={styles.title}>{item.title.toUpperCase()}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 67,
    paddingVertical: 25,
    backgroundColor: '#A189C8',
    alignItems: 'center',
  },
  icon: {
    width: 45,
    height: 45,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 24,
    color: '#522689',
  },
  description: {
    textAlign: 'center',
    fontFamily: 'FiraSans_400Regular',
    fontSize: 18,
    color: '#fff',
  },
});
