import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '90%',
    marginTop: 3,
    marginBottom: 3,
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  heading: {
    textAlign: 'center',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 34,
    color: '#522689',
    marginBottom: 20,
  },
  contactFormContainer: {
    width: '100%',
    marginBottom: 20,
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: '#522689',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 28,
    alignSelf: 'center',
    margin: 20,
  },
  submitButtonText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 24,
    color: '#efefef',
  },
  inputLabels: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 20,
    letterSpacing: 1,
    color: 'black',
    marginTop: 5,
  },
  inputFields: {
    backgroundColor: '#C4B3E4',
    borderRadius: 10,
    height: 30,
  },
  messageField: {
    backgroundColor: '#C4B3E4',
    height: 150,
    borderRadius: 10,
  },
  content1: {
    textAlign: 'center',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 20,
    color: '#522689',
  },
  content2: {
    textAlign: 'center',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 20,
    color: '#522689',
  },
});
const ContentBox = () => {
  return (
    <View style={styles.contentBox}>
      <Text style={styles.content1}>Need assistance or have questions? </Text>
      <Text style={styles.content2}>
        Don't hesitate to reach out to us. Our team is here to help!
      </Text>
    </View>
  );
};
const ContactUs = () => {
  return (
    <View style={styles.container}>
      <ContentBox />
      <Text style={styles.heading}>Contact Us</Text>
      <View style={styles.contactFormContainer}>
        <Text style={styles.inputLabels}>Name</Text>
        <TextInput style={styles.inputFields} />
        <Text style={styles.inputLabels}>Email</Text>
        <TextInput style={styles.inputFields} />
        <Text style={styles.inputLabels}>Phone Number</Text>
        <TextInput style={styles.inputFields} />
        <Text style={styles.inputLabels}>Message</Text>
        <TextInput style={styles.messageField} multiline />
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactUs;
