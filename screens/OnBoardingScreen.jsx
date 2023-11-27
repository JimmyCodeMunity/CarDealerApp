import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/backgrounds/Unknown-7.jpg')}
        style={styles.backgroundImage}
        blurRadius={1}
      />
      <View style={styles.titleContainer} className="w-full">
        <View className="flex-row justify-between items-center">
          <View>
            <Text style={styles.titleText}>Take</Text>
            <Text style={[styles.titleText,]}>The</Text>
            <Text style={styles.titleText}>Control</Text>
          </View>
          <View>
            <Image source={require('../assets/logodark.png')} className="px-5" style={{ height: '50%', width: 100 }} />
          </View>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/whiterange.png')} style={styles.rangeeImage} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 3,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
  },
  blueText: {
    color: 'blue',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200, // Adjust the height as needed
  },
  rangeeImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 60,
    alignItems: 'center',
  },
  getStartedButton: {
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
  },
  getStartedButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default OnboardingScreen;
