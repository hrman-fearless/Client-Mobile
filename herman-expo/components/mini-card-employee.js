import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default miniCard = ({fullname, photos, title, email, phone, timeLogged, fetchAllUsers}) => {
  const width = Dimensions.get('screen').width
  const height = Dimensions.get('screen').height
  const style = StyleSheet.create({
    container: {
      backgroundColor: '#f5fafe',
    },
    indicatorArrived: {
      width: 60,
      height: 20,
      backgroundColor: '#80C494',
      alignSelf: 'center',
      marginTop: height*.0075,
      borderRadius: 10
    },
    indicatorNot: {
      width: 60,
      height: 20,
      backgroundColor: '#EBAF78',
      alignSelf: 'center',
      marginTop: height*.0075,
      borderRadius: 10
    },
    indicatorText: {
      fontWeight: '600',
      fontSize: 12,
      // height: height*.05,
      color: '#fff',
      marginTop: 2.5,
      alignItems: 'center',
      textAlign: 'center'
    },
    home: {
      paddingTop: 100,
      height: 'auto',
      height: Dimensions.get('screen').height,
    },
    h1: {
      fontWeight:  '800',
      fontSize: 24,
      paddingBottom: 10,
      alignSelf: 'flex-start',
      textAlign: 'left',
      marginLeft: '10%',
      color: '#0C344A'
    },
    card: {
      flexDirection: 'row',
      // flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
      alignSelf: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: '#fff',
      height: 100,
      width: '90%',
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0, 
        height: 3
      },
      shadowOpacity: 0.10,
      shadowRadius: 2.22,
      elevation: 3
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      // marginTop: -height*.025
    },
    icon: {
      marginTop: height*.005,
      width: width*.6,
      height: height*.025,
      flexDirection: "row"
    },
    text: {
      flexDirection: 'row',
      width: '80%',
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      flexWrap: 'wrap',
      paddingTop: 5,
      paddingLeft: width*.05,
    },
    textName: {
      width: 200,
      // height: height*.05,
      textAlign: 'left',
      fontWeight:  '800',
      fontSize: 14,
      color: '#0C344A'
    },
    textTitle: {
      width: 200,
      textAlign: 'left',
      fontWeight:  '800',
      fontSize: 14,
      color: '#547080'
    },
    detail: {
      paddingTop: 10,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      flexDirection: 'column'
    },
    detailText: {
      fontWeight: '600',
      fontSize: 12,
      height: height*.05,
      color: '#547080'
    },
    listDetail: {
      paddingTop: .5,
      paddingRight: 5,
      paddingBottom: .5,
      textAlign: 'left'
    }
  })

  let today = new Date();
  today = today.getUTCFullYear() + '/' + today.getUTCMonth() + '/' + today.getUTCDate();
  let lastTimeLogged = (timeLogged[timeLogged.length-1]) && timeLogged[timeLogged.length-1].arrival || new Date("2000/01/01");
  lastTimeLogged = new Date(lastTimeLogged).getUTCFullYear() + '/' + new Date(lastTimeLogged).getUTCMonth() + '/' + new Date(lastTimeLogged).getUTCDate();

  return(
    <View style={style.card}>
      <View style={{flexDirection: 'column', alignContent: 'center', justifyContent: 'flex-end', alignItems: 'center'}}>
        <Image
          style={style.avatar}
          source={{uri: `https://${photos.Bucket}.s3.amazonaws.com/${photos.Name}`}}/>
          {
            (today === lastTimeLogged) ? (<View style={style.indicatorArrived}>
              <Text style={style.indicatorText}>
                Arrived
              </Text>
            </View>) : <View style={style.indicatorNot}>
              <Text style={style.indicatorText}>
                Not Yet
              </Text>
            </View>
          }
      </View>
      <View style={style.text}>
        <Text style={style.textName}>{fullname}</Text>
        <Text style={style.textTitle}>{title}</Text>
        <View style={style.detail}>
          <View style={style.icon}>
            <Feather name="mail" color={'#547080'} size={12} style={style.listDetail}/>
            <Text style={style.detailText}>{email}</Text>
          </View>
          <View style={style.icon}>
            <Feather name="smartphone" color={'#547080'} size={12} style={style.listDetail}/>
            <Text style={style.detailText}>{phone}</Text>
          </View>
        </View>
        {/* <Text style={style.textName}>{email}</Text> */}
        {/* <Text style={style.textName}>{email}</Text> */}
      </View>
    </View>
  )
};
