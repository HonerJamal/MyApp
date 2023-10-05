import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CityList from './components/CityList';
import CityDetail from './components/CityDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="CityList">
        <Stack.Screen name="WheaterApp" component={CityList} />
        <Stack.Screen name="CityDetail" component={CityDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}