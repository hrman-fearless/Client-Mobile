import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Button from '../components/button';
import Logo from '../assets/herman-logo.png';
import { signIn } from '../store/action/index.js';
import { connect } from 'react-redux'

const DashboardPage = (props) => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const { signIn, navigation } = props
  const data = {
        "_id": "5d63b7f31ee37200084666e6",
        "fullname": "Irshadi Bagasputro",
        "title": "CEO",
        "password": "$2a$10$R9t2wq0vwhxFKHXm/i0SnOpehLJ2pdpxtuREcsSsXvEADPpIp4.yy",
        "email": "ibe@mail.com",
        "birthday": "1995-04-16T00:00:00.000Z",
        "jobDesc": "Sebagai Company Leader dan Investor",
        "phone": "087705490717",
        "address": "Jl. Kelinci No. 6D",
        "timeLogged": [],
        "createdAt": "2019-08-26T10:44:03.765Z",
        "updatedAt": "2019-08-26T10:44:03.765Z"
    }

  return (
    <>
    <SafeAreaView>
      <View style={style.home}>
        <Text>
          Dashboard
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

export default connect(null, mapDispatchToProps)(DashboardPage)
