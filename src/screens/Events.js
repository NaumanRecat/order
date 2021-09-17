import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground , Image} from 'react-native';

export class Events extends React.Component{
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
                <Text> Events </Text>
            </TouchableOpacity>
            </View>
        )
    }
}