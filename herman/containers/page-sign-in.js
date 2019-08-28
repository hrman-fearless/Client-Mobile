import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image } from 'react-native';
import Button from '../components/button';
import Logo from '../assets/herman-logo.png';
import { signIn } from '../store/action/index.js';
import AsyncStorage from '@react-native-community/async-storage';
import { getToken } from '../helpers/async-storage';
import { connect } from 'react-redux'

const SignInPage = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, navigation } = props
  const inputEmailHandler = (val) => setEmail(val)
  const inputPasswordHandler = (val) => setPassword(val)

  useEffect(() => {
    // navigation.navigate('Dashboard')
    checkLogin()
  }, [])

  const checkLogin = async () => {
    if (await getToken()) navigation.navigate('Dashboard')
  }
  const dispatchSignIn = async () => {
    await signIn({
      email,
      password
    })
    checkLogin()
  }

  return (
    <>
    <SafeAreaView>
      <View style={style.home}>
        <Image
          style={style.signInLogo}
          source={Logo}/>
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
            />
          <Text style={style.label}>Password</Text>
          <TextInput
              style={style.input}
              onChangeText={text => inputPasswordHandler(text)}
              value={password}
              secureTextEntry={true}
              autoCorrect={false}
            />
        </View>
        <Button text='Sign In' functionPayload={dispatchSignIn}/>
      </View>
    </SafeAreaView>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#EFF3F5',
  },
  home: {
    marginTop: 80,
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInLogo: {
    height: 350,
    width: 350
  },
  form: {
    padding: 10
  },
  input: {
    height: 40,
    width: 300,
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
    paddingBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: '10%',
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

const mapDispatchToProps = {
  signIn
}

export default connect(null, mapDispatchToProps)(SignInPage)
