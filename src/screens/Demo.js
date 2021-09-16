import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

export class Demo extends React.Component{
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
                <Icon name="home" size={h('4%')} color="green" />  
                <Text>
                    Text1
                </Text>
            </TouchableOpacity>
            </View>
        )
    }
}