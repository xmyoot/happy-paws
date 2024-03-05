import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function Footer() {
  const first = ['Contact', 'FAQs', 'Locations'];
  const second = ['Privacy', 'Terms', 'Legal', 'Cookie', 'Preferences'];
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/logo-purple.png')}
        style={styles.image}
      />
      <Text style={[styles.text, styles.title]}>
        {first.map((item) => {
          const lastItem = first.slice(-1)[0];
          return (
            <>
              <Link href="/">{item}</Link>
              <Text>{item !== lastItem ? ' | ' : ''}</Text>
            </>
          );
        })}
      </Text>
      <Text style={styles.text}>
        &copy;2024 All Rights Reserved. Happy Paws&reg; is a registered
        trademark of Company Name.
      </Text>
      <Text style={styles.text}>
        {'\n'}
        {second.map((item) => {
          const lastItem = second.slice(-1)[0];
          return (
            <>
              <Link href="/">{item}</Link>
              <Text>{item !== lastItem ? ' | ' : ''}</Text>
            </>
          );
        })}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#A189C8',
    paddingVertical: 22,
    paddingHorizontal: 42,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 100,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'FiraSans_400Regular',
    fontSize: 14,
  },
  title: {
    fontFamily: 'FiraSans_500Medium',
    fontSize: 22,
    marginTop: 30,
    marginBottom: 20,
  },
});
