import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from 'react-native';
import { getToday, getMonthNow, hourNow } from '../helpers/textual-date';
import LottieView from "lottie-react-native";
import { Ionicons } from '@expo/vector-icons';

export default absentCard = ({index, arrival, leave}) => {
  console.log(index);
  const color = [
    `#7581F7`,
    `#F09994`,
    `#80C7D4`,
    `#006FAA`,
    `#9DC8D1`,
  ]
  const width = Dimensions.get('screen').width
  const height = Dimensions.get('screen').height
  const style = StyleSheet.create({
    card: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignSelf: 'center',
      paddingLeft: 20,
      backgroundColor: color[index],
      paddingRight: 20,
      marginBottom: height*.025,
      height: height*.14,
      width: '90%',
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0, 
        height: 3
      },
      shadowOpacity: 0.10,
      shadowRadius: 2.22,
      elevation: 3,
    },
    bgText: {
      color: `#FFF`,
      fontWeight: '800',
      fontSize: 26,
      textAlign: 'center',
      alignSelf: 'flex-end',
      paddingBottom: 12.5,
    },
    log: {
      flexDirection: 'column',
      justifyContent: 'center',
      // alignContent: 'center',
      height: height*.14,
    },
    logText: {
      marginTop: 1,
      fontWeight: '800',
      fontSize: 14,
      textAlign: 'center',
      color: '#E8EDFD',
      alignSelf: 'center',
      marginBottom: 1,
      marginLeft: 10
    },
    inline: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: 'center'
    }
  })

  return (
    <View style={style.card}>
      <LottieView
        style={{
          width: width*.9,
          height: height*.184,
          opacity: 0.5,
          position: "absolute",
        }}
        source={require('../assets/wave1.json')}
        autoPlay
        loop
      />
      <View style={style.log}>
        { arrival && (<View style={style.inline}>
            <Ionicons name="ios-log-in" size={14} color="#fff"/>
            <Text style={style.logText}>{hourNow(new Date(arrival)) }</Text>
          </View>) }
        { leave && (<View style={style.inline}>
            <Ionicons name="ios-log-out" size={14} color="#fff"/>
            <Text style={style.logText}>{hourNow(new Date(leave)) }</Text>
          </View>) }
      </View>
      <Text style={style.bgText}>{getToday(new Date(arrival).getDay())}</Text>
    </View>
  )
}