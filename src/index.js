import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppEntro from './appEntro/appEntro';
import Login from './screens/login'

const Stack = createNativeStackNavigator();

export default function Hospital() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppEntro" component={AppEntro} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
