import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Button from '../components/button';
import Logo from '../assets/herman-logo.png';
import { signIn } from '../store/action/index.js';
import { connect } from 'react-redux'

const UserListPage = (props) => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const { signIn, navigation } = props

  return (
    <>
    <SafeAreaView>
      <View style={style.home}>
        <Text>
          Employee
        </Text>
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

export default connect(null, mapDispatchToProps)(UserListPage)
