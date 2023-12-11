// Neccessary imports
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Define the WelcomeScreen component
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/img/Logo.png')}
        style={styles.logo}
      />
      <Text style={styles.tagline}>An Expense Tracker for Couples</Text>
      <TouchableOpacity
        style={styles.button}

        onPress={() => navigation.navigate('MainApp')} // Which is defaulted to DashboardScreen
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E9D9C9',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  tagline: {
    fontFamily: 'JetBrainsMono',
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F5A2C4',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'Dillan',
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default WelcomeScreen;
