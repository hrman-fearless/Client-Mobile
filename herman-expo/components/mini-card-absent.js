import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from 'react-native';
import { getToday, getMonthNow, hourNow } from '../helpers/textual-date';

export default absentCard = ({index, arrival, leave}) => {
  const color = [
    [`#CFECF6`, `#fff`],
    [`#EB804F`, `#d4e1d4`],
    [`#FAF3FE`, `#e1dae4`],
    [`#FDF4F3`],
    [`#9DC8D1`],
    [`#F5D898`],
    [`#F19855`]
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
      backgroundColor: color[index][0],
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
      color: color[index][1],
      fontWeight: '800',
      fontSize: 26,
      textAlign: 'center',
      alignSelf: 'flex-end',
      // marginTop: 12.5,
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
      marginBottom: 1
    }
  })

  return (
    <View style={style.card}>
      <View style={style.log}>
        { arrival && <Text style={style.logText}>{hourNow(new Date(arrival)) }</Text> }
        { leave && <Text style={style.logText}>{hourNow(new Date(leave))}</Text> }
      </View>
      <Text style={style.bgText}>{getToday(new Date(arrival).getDay())}</Text>
    </View>
  )
}