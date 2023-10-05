import React, { useEffect, useState } from 'react';
import { Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { City } from '../cityData';
import * as SMS from 'expo-sms';
import { LinearGradient } from 'expo-linear-gradient';
import * as ScreenOrientation from 'expo-screen-orientation';

interface CityDetailProps {
  route: any;
}

const CityDetail: React.FC<CityDetailProps> = ({ route }) => {
  const { cityData } = route.params as { cityData: City };

  const [landscapeMode, setLandscapeMode] = useState(false);

  const toggleOrientation = async () => {
    const desiredOrientation = landscapeMode
      ? ScreenOrientation.OrientationLock.PORTRAIT_UP
      : ScreenOrientation.OrientationLock.LANDSCAPE;
    
    const isOrientationSupported = await ScreenOrientation.supportsOrientationLockAsync(desiredOrientation);
  
    if (isOrientationSupported) {
      await ScreenOrientation.lockAsync(desiredOrientation);
      setLandscapeMode(!landscapeMode);
    } else {
      console.error('Den begärda orienteringen stöds inte på den här enheten.');
    }
  };
  

  const sendWeatherSMS = async () => {
    try {

      const message = `Vädret i ${cityData.name}:\nTemperatur: 🌡️ ${cityData.temperature}\nKänns som: 🌡️ ${cityData.feelsLike}\nFörhållanden: ${cityData.conditions}\nSoluppgång: 🌅 ${cityData.sunUp} *Lokal Tid*\nSolnedgång: 🌇 ${cityData.sunDown} *Lokal Tid*\nVind: 💨 ${cityData.wind}`;

      const isAvailable = await SMS.isAvailableAsync();

      if (isAvailable) {
        await SMS.sendSMSAsync([], message);
      } else {
        console.error('SMS är inte tillgängligt på den här enheten.');
      }
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  useEffect(() => {
    ScreenOrientation.unlockAsync();

    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={['black', 'white']}
        style={styles.linearGradient}
      >
        <Image
          source={{ uri: cityData.image }}
          style={styles.image}
        />
        <Text style={styles.text}>Stad: {cityData.name}</Text>
        <Text style={styles.text}>Temperatur: 🌡️ {cityData.temperature}</Text>
        <Text style={styles.text}>Känns som: 🌡️ {cityData.feelsLike}</Text>
        <Text style={styles.text}>Förhållanden: {cityData.conditions}</Text>
        <Text style={styles.text}>Soluppgång: 🌅 {cityData.sunUp} *Lokal Tid*</Text>
        <Text style={styles.text}>Solnedgång: 🌇 {cityData.sunDown} *Lokal Tid*</Text>
        <Text style={styles.text}>Vind: 💨 {cityData.wind}</Text>

        <TouchableOpacity onPress={sendWeatherSMS} style={styles.button}>
          <Text style={styles.buttonText}>Skicka väder via SMS</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleOrientation} style={styles.orientationButton}>
          <Text style={styles.orientationButtonText}>
            {landscapeMode ? 'Portrait Mode' : 'Landscape Mode'}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  linearGradient: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
  },
  text: {
    color: 'white',
    fontSize: 18,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '5%',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orientationButton: {
    marginTop: 10,
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  orientationButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CityDetail;