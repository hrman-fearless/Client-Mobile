import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default SignIn = () => {
  return (
    <SafeAreaView>
      <View
        style={style.headerMain}>
        <Image
          style={style.headerImage}
          source={require('../assets/astro-mov.png')}
        />
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  headerMain: {
    paddingTop: 5,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
    zIndex: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0, 
      height: 5 
    },
    shadowOpacity: 0.10,
    shadowRadius: 2.22,
    elevation: 3,
  },
  headerImage: {
    alignSelf: 'center',
    height: 40,
    resizeMode: 'contain'
  }
})