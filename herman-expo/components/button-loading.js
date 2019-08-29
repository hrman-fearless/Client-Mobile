import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';

export default Button = () => {
  return (
    <View style={style.button}>
        <LottieView
          style={style.spinner}
          source={require('../assets/spinner.json')}
          autoPlay
          loop
        />
    </View>
  )
}

const style = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#0029ff',
    height: 40,
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    shadowColor: 'rgba(0, 106, 255, 0.4)',
    shadowOpacity: 1.5,
    elevation: 4,
    shadowRadius: 10 ,
    shadowOffset : { width: 1, height: 13},
    color: '#FFFFFF',
    opacity: 0.5
  },
  buttonText: {
    alignItems: 'flex-start',
    fontSize: 16,
    fontWeight: '800',
    color: '#fff',
  },
  spinner: {
    alignSelf: 'center',
    height: 30,
    width: 30
  }
  
})