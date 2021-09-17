import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export class Home extends React.Component{
    render(){
        return(
            <View style={{
                flex:1,
                backgroundColor:'#ada',
            }}>
                <TouchableOpacity style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center',
                 }}> 
                <Text>
                     Home
                </Text>
            </TouchableOpacity>
            </View>
        )
    }
}