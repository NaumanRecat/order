import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';




function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Icon name="home" size={h('3%')} color="red" />
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export const TabNavigator =()=> {
  return (
    
      <Tab.Navigator>



        <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'SettingsScreen',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />

      </Tab.Navigator>
    
  );
}