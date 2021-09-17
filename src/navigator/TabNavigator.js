import React from 'react';
import {  Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Profile} from '../screens/Profile';
import {Home} from '../screens/Home';
import {Events} from '../screens/Events';

const Tab = createBottomTabNavigator();

export const TabNavigator =()=> {
  return (
    
      <Tab.Navigator>

<Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Image source={require('../assest/profile.png')} />
          ),
        }}
      />
      
<Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image source={require('../assest/home.png')} />
          ),
        }}
      />

<Tab.Screen
        name="Events"
        component={Events}
        options={{
          headerShown: false,
          tabBarLabel: 'Events',
          tabBarIcon: ({color, size}) => (
            <Image source={require('../assest/events.png')} />
          ),
        }}
      />

      </Tab.Navigator>
    
  );
}