import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {TabNavigator} from '../navigator/TabNavigator';

const Stack = createNativeStackNavigator();

export const ScreenNavigator =()=>  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      {/* <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} /> */}
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Demo" component={Demo} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

