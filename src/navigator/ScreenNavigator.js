import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Demo} from '../screens/Demo';
import {TabNavigator} from '../navigator/TabNavigator';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export const ScreenNavigator =()=>  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Demo" component={Demo} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

