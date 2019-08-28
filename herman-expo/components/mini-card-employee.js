import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default miniCard = ({fullname, photos, title, email, phone}) => {
  return(
    <View style={style.card}>
      <Image
        style={style.avatar}
        source={{uri: `https://${photos.Bucket}.s3-ap-southeast-1.amazonaws.com/${photos.Name}`}}
        />
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
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const style = StyleSheet.create({
  container: {
    backgroundColor: '#f5fafe',
  },
  home: {
    paddingTop: 100,
    height: 'auto',
    // alignItems: 'center',
    // justifyContent: 'center',
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
    marginBottom: 20,
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
    marginTop: -height*.025
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
