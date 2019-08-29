import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ImageBackground, Dimensions } from 'react-native';
import Button from '../components/button';
import ButtonLoading from '../components/button-loading';
import { getToken, destroyToken } from '../helpers/async-storage';
import { signIn, loadingStart } from '../store/action/index.js';
import { connect } from 'react-redux';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import LottieView from 'lottie-react-native';
import {KeyboardAvoidingView} from 'react-native';

const SignInPage = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [loading, setLoading] = useState(false)
  const { signIn, navigation, isLoading, loadingStart } = props
  const inputEmailHandler = (val) => setEmail(val)
  const inputPasswordHandler = (val) => setPassword(val)

  useEffect(() => {
    // destroyToken()
    checkLogin()
  })

  const checkLogin = async () => {
    if (await getToken('token')) navigation.navigate('Dashboard')
  }

  const dispatchSignIn = async () => {
    loadingStart()
    try {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
      if (status !== 'granted') {
        alert('You need to enable permission in settings')
        return;
      }
      const token = await Notifications.getExpoPushTokenAsync();
      
      await signIn({
        email,
        password,
        deviceID: token
      })
      checkLogin()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <SafeAreaView>
        <View style={style.home}>
        <KeyboardAvoidingView behavior="position" enabled>
          <View
            style={style.bgHerman}>
            <LottieView
                style={style.signInLogo}
                source={require('../assets/animation-w191-h173.json')}
                autoPlay
                loop
              />
          </View>
          <Text style={style.h1}>Sign In</Text>
          <View style={style.form}>
            <Text style={style.label}>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={text => inputEmailHandler(text)}
                value={email}
                autoCorrect={false}
                keyboardType='email-address'
                autoCompleteType='email'
                autoCapitalize='none'
                returnKeyType='done'
              />
            <Text style={style.label}>Password</Text>
            <TextInput
                style={style.input}
                onChangeText={text => inputPasswordHandler(text)}
                value={password}
                secureTextEntry={true}
                autoCorrect={false}
                returnKeyType='done'
              />
          </View>
          { isLoading && <ButtonLoading/> }
          { !isLoading && <Button text='Sign In' functionPayload={dispatchSignIn}/>}
        </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </>
  )
}
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const style = StyleSheet.create({
  container: {
    backgroundColor: '#EFF3F5',
  },
  bgHerman: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: width*.625,
    height: height*.35,
    borderRadius: 100,
    backgroundColor: '#b1b1b1',
  },
  home: {
    marginTop: height*0.075,
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInLogo: {
    height: height*0.3,
    width: width*0.8,
    alignSelf:'center'
    // resizeMode: 'contain'
  },
  form: {
    padding: 10
  },
  input: {
    height: height*.055,
    width: width*0.8,
    borderColor: '#EFF3F5',
    backgroundColor: '#EFF3F5',
    color: '#0C344A',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15
  },
  h1: {
    fontWeight:  '800',
    fontSize: 24,
    paddingTop: height*0.025,
    paddingBottom: height*0.01,
    alignSelf: 'flex-start',
    marginLeft: '5%',
    color: '#0C344A'
  },
  label: {
    color: '#0C344A',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  placeholder: {
    color: '#0C344A',
    margin: 5,
    fontSize: 14
  }
})

const mapStateToProps = (state) => {
  return {
    isLoading : state.isLoading
  }
}

const mapDispatchToProps = {
  loadingStart,
  signIn
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage)
