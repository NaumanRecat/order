import React from 'react';
import {
  Text,
  View,
  ImageBackground,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

export class Splash extends React.Component{
    render(){
        return(

            // Parent View

            <View style={{
                flex:1,
                backgroundColor:'#FFFFFF',
            }}>

                {/* First Half View */}
       
                <View style={{
                    height: h('58%'),
                    width:w('100%'),
                    // backgroundColor:'#ada',
                    alignItems:'center',
                    justifyContent:'center', 
                }}>
                    <ImageBackground
                     source={
                         require('../assest/Logo1.png')
                        }
                        style={{
                        height: h('50%'),
                        width: '100%',
                        // backgroundColor: 'grey',
                        overflow: 'hidden',
                 }}/>
                 <View style={{position: 'absolute', top: 10, left: 0, right: 0, bottom: 0, alignItems:'center', justifyContent:'center'}}>
                    
                 <Text style={{
                     fontSize:h('3.5%'),
                     color:'orange',
                     fontWeight:'500',
                 }}>
                    {`P E R T H`}
        </Text>
                </View>

                <View style={{position: 'absolute', top: 40, left: 0, right: 0, bottom: 0, alignItems:'center', justifyContent:'center'}}>
                    
                    <Text style={{
                        fontSize:h('4.5%'),
                        color:'orange',
                        fontWeight:'900',
                    }}>
                       {`
    U N P L U G G E D`}
           </Text>
                   </View>
                </View>

                
                {/* Second Half */}

                <View style={{
                    height:h('42%'),
                    width:w('100%'),
                    // backgroundColor:'#faf',
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                    <TouchableOpacity style={{
                        height:h('11%'),
                        width:w('93%'),
                        backgroundColor:'#FDC1C1',
                        borderRadius: h('12%'),
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <Text style={{
                            fontSize:h('3%'),
                            color:'white',
                        }}> Sign up with Email </Text>
                    </TouchableOpacity>

                    <View style={{
                        height:h('2%'),
                    }}/>

                    <TouchableOpacity style={{
                        height:h('11%'),
                        width:w('93%'),
                        backgroundColor:'#4267B2',
                        borderRadius: h('12%'),
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <Text style={{
                            color:'white',
                            fontSize:h('3%'),
                        }}> Sign up with Facebook </Text>
                    </TouchableOpacity>
                    <View style={{
                        height:h('5%'),
                        width:w('100%'),
                        // backgroundColor:'yellow',
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <Text>
                            You have an account? Sign up
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}