import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

export class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          progressPercentage: 100,
          isClicked: false,
          selectedValue: 2,
        };
      }

    // state={
    //     data:[
    //     {
    //     progressPercentage: 85,
    //     isClicked: false,
    //     selectedValue: 2,
    //     }
    //     ]
    // }

    renderCircle =()=>{
        const { progressPercentage } = this.state;
        return(
            <View>
                <Text style={{
                    textAlign:'center',
                }}>
                  <View style={{
                      height:h('40%'),
                      width:w('100%'),
                    //   backgroundColor:'#ada',
                      alignItems:'center',
                      justifyContent:'center',
                  }}>
                        <ProgressCircle
             percent={progressPercentage}
            radius={90}
            borderWidth={18}
            color={progressPercentage === 100 ? 'green' : progressPercentage > 80 && progressPercentage < 100 ? 'orange' : 'red'}
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}> {progressPercentage === 100 ? 'Keep up the good work!' : progressPercentage > 80 ? 'Almost there!' : 'Keep going!'}</Text>
            <Text>{progressPercentage === 100 ? '1hr 05m' : progressPercentage > 80 && progressPercentage < 100 ? '2h 30m' : '5h 59m'}</Text>
        </ProgressCircle>

                  </View>
                </Text>
            </View>
        )
    }


   
    // renderCircle = () => {
    //     const { progressPercentage } = this.state;
    //     return (
    //       <View>
    //         <Text style={styles.Title}>{progressPercentage === 100 ? 'Keep up the good work!' : progressPercentage > 80 ? 'Almost there!' : 'Keep going!'}</Text>
    //         <View style={styles.circle}>
    //           <ProgressCircle
    //             percent={progressPercentage}
    //             radius={150}
    //             borderWidth={35}
    //             color={progressPercentage === 100 ? colors.green : progressPercentage > 80 && progressPercentage < 100 ? colors.orange : colors.red}
    //             shadowColor="#999"
    //             bgColor="#fff"
    //           >
    //             <Text style={styles.internalTextSubHeading}>5 day average</Text>
    //             <Text style={styles.internalTextHeading}> {progressPercentage === 100 ? '1hr 05m' : progressPercentage > 80 && progressPercentage < 100 ? '2h 30m' : '5h 59m'} </Text>
    //           </ProgressCircle>
    //         </View>
    //         <View style={progressPercentage === 100 ? styles.GreenLine : progressPercentage > 80 && progressPercentage < 100 ? styles.OrangeLine : styles.RedLine} />
    //         <Text style={styles.eventText} >Your VIP events  </Text>
    //       </View>
    //     );
    //   };





    render(){
        return(
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center',
            }}>
                 {this.renderCircle()}
            </View>
        )
    }
}