import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export class Profile extends React.Component{
    render(){
        return(
            <View style={{
                flex:1,
                // backgroundColor:'#ada',
            }}>
                <TouchableOpacity style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center',
                 }}>
                <Text>
                    Profile
                </Text>
            </TouchableOpacity>
            </View>
        )
    }
}