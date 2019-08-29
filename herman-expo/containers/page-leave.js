import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from 'react-native';
import LottieView from "lottie-react-native";
import Button from '../components/button';

const LoadingScreen = (props) => {

  const goBack = () => {
    props.navigation.navigate('Dashboard')
  }

  return (
    <>
    <SafeAreaView>
      <LottieView
        style={{marginTop: '-15%'}}
        source={require('../assets/3532-car.json')}
        autoPlay
        loop/>
      <View style={style.home}>
        <Text style={style.h1}>You're Set To Go Home !</Text>
        <Text style={style.text}>Please be careful on your way home</Text>
        <Button text='Go Back' functionPayload={goBack}/>
      </View>
    </SafeAreaView>
    </>
  )
}
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const style = StyleSheet.create({
  home: {
    paddingTop: height*.25,
    height: height,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  headerLoading: {
    height: height*.4,
    width: width
  },
  h1: {
    fontWeight:  '800',
    fontSize: 20,
    paddingTop: height*0.25,
    alignSelf: 'center',
    marginLeft: '5%',
    color: '#0C344A'
  },
  text: {
    paddingTop: 10,
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 12,
    height: height*.05,
    color: '#547080'
  }
})

export default LoadingScreen
