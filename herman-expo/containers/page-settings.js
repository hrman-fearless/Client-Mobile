import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from 'react-native';
import { AsyncStorage } from 'react-native';
import Button from '../components/button';
import { signIn, signOut } from '../store/action/index.js';
import { connect } from 'react-redux';
import Logo from '../assets/herman-splash.png';

const SettingPage = (props) => {
  const { navigation, signOut } = props

  const signOutFromApp = async () => {
    try {
      await AsyncStorage.removeItem('token')
    } catch (error) {
      console.log(error.message);    
    }
    signOut()
    navigation.navigate('Landing')
  }

  return (
    <>
    <SafeAreaView>
      <View style={style.home}>
        <Image
          style={style.signInLogo}
          source={Logo}/>
        <Text style={style.h1}>Proudly Made by :</Text>
        <Text style={style.text}>Irshadi Bagasputro</Text>
        <Text style={style.text}>IG Rinda Yuda Wardana</Text>
        <Text style={style.text}>Hendrix Jhon Rickson Silaen.</Text>
        <Button text='Sign Out' functionPayload={signOutFromApp}/>
        </View>
    </SafeAreaView>
    </>
  )
}

const height = Dimensions.get('screen').height
const style = StyleSheet.create({
  container: {
    backgroundColor: '#f5fafe',
  },
  home: {
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInLogo: {
    height: 300,
    width: 300,
    alignSelf: 'center'
  },
  form: {
    padding: 20
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 15
  },
  h1: {
    fontWeight:  '800',
    fontSize: 24,
    paddingBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  placeholder: {
    margin: 5,
    fontSize: 14
  },
  h1: {
    fontWeight:  '800',
    fontSize: 16,
    alignSelf: 'center',
    color: '#0C344A',
    paddingBottom: 15
  },
  text: {
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 12,
    width: '75%',
    paddingHorizontal: 10,
    flexWrap: 'wrap',
    color: '#547080'
  }
})

const mapDispatchToProps = {
  signIn,
  signOut
}

export default connect(null, mapDispatchToProps)(SettingPage)
