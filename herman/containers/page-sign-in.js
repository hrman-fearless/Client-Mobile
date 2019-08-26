import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image } from 'react-native';
import Button from '../components/button';
import Logo from '../assets/herman-logo.png';
import { signIn } from '../store/action/index.js';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'

const SignInPage = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, navigation } = props
  const inputEmailHandler = (val) => setEmail(val)
  const inputPasswordHandler = (val) => setPassword(val)

  const dispatchSignIn = async () => {
    console.log(email, password);
    await signIn({
      email,
      password
    })
    console.log(AsyncStorage.getItem('token'));
    navigation.navigate('Dashboard')
  }


  const goToHome = () => {
    // navigation.navigate('home')
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
        {/* <Button text='Home' functionPayload={goToHome}/> */}
      </View>
    </SafeAreaView>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f5fafe',
  },
  home: {
    marginTop: 80,
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInLogo: {
    height: 300,
    width: 300
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
  }
})

const mapDispatchToProps = {
  signIn
}

export default connect(null, mapDispatchToProps)(SignInPage)
