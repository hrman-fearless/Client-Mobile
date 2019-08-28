import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from 'react-native';
import LottieView from "lottie-react-native";

const LoadingScreen = (props) => {
  return (
    <>
    <SafeAreaView>
      <View style={style.home}>
        <LottieView
          style={style.signInLogo}
          source={require('../assets/2513-loading-animation.json')}
          autoPlay
          loop
        />
      <Text style={style.h1}>Please Wait</Text>
      </View>
    </SafeAreaView>
    </>
  )
}

const height = Dimensions.get('screen').height
const style = StyleSheet.create({
  home: {
    height: height,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  headerLoading: {
    height: height*.4,
    width: 400
  },
  h1: {
    fontWeight:  '800',
    fontSize: 20,
    paddingTop: height*0.25,
    alignSelf: 'center',
    marginLeft: '5%',
    color: '#0C344A'
  },
})

export default LoadingScreen
