import React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Profile} from '../screens/Profile';
import {Home} from '../screens/Home';
import {Events} from '../screens/Events';




// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Icon name="home" size={h('3%')} color="red" />
//       <Text>Settings!</Text>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

export const TabNavigator =()=> {
  return (
    
      <Tab.Navigator>



        {/* <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'SettingsScreen',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      /> */}

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