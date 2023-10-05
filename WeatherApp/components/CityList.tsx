import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { City, cities } from '../cityData';
import { LinearGradient } from 'expo-linear-gradient';

interface CityListProps {
  navigation: any;
}

const CityList: React.FC<CityListProps> = ({ navigation }) => {
  const handleCityPress = (city: City) => {
    navigation.navigate('CityDetail', { cityData: city });
  };

  const renderCityItem = ({ item }: { item: City }) => (
    <TouchableOpacity onPress={() => handleCityPress(item)} style={styles.cityContainer}>
      <LinearGradient
        colors={['black', 'white']}
        style={styles.linearGradient}
      >
        <ImageBackground
          source={{ uri: item.image }}
          style={styles.cityImage}
          resizeMode="cover"
          imageStyle={styles.rounded}
        >
          <View style={styles.overlay}>
            <Text style={styles.cityName}>{item.name}</Text>
          </View>
        </ImageBackground>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <View>
        <Text style={styles.infoText}>Tryck på en stad nedan för att få mer information</Text>
      <FlatList
        data={cities}
        renderItem={renderCityItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  infoText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 16,
    color: 'white',
  },
  cityContainer: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 16,
  },
  cityImage: {
    width: '100%',
    height: 200,
  },
  rounded: {
    borderRadius: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 18,
    color: 'white',
  },
});

export default CityList;