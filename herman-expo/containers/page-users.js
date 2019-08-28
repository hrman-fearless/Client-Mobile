import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import Button from '../components/button';
import CardEmployee from '../components/mini-card-employee';
import { signIn } from '../store/action/index.js';
import { connect } from 'react-redux'

const UserListPage = (props) => {
  const data = [{
    _id: "5d63b7f31ee37200084666e6",
    fullname: "Irshadi Bagasputro",
    title: "Fullstack Engineer",
    password: "$2a$10$R9t2wq0vwhxFKHXm/i0SnOpehLJ2pdpxtuREcsSsXvEADPpIp4.yy",
    email: "ibe@mail.com",
    birthday: "1995-04-16T00:00:00.000Z",
    jobDesc: "Sebagai Company Leader dan Investor",
    phone: "087705490717",
    address: "Jl. Kelinci No. 6D",
    timeLogged: [{
      arrival: '2019-08-26T14:12:05.134+00:00',
      // leave: '2019-08-26T14:41:02.050+00:00',
      // leave2: null
    }],
    createdAt: "2019-08-26T10:44:03.765Z",
    updatedAt: "2019-08-26T10:44:03.765Z",
    photos: {
      Bucket: 'herman-photos',
      Name: 'ibe1.jpg'
    }
  }, {
    _id: "5d63cc156b93c02cc5a75a80",
    fullname: "Yuda Wardhana",
    title: "Fullstack Engineer",
    password: "$2a$10$R9t2wq0vwhxFKHXm/i0SnOpehLJ2pdpxtuREcsSsXvEADPpIp4.yy",
    email: "yuda@mail.com",
    birthday: "1995-04-16T00:00:00.000Z",
    jobDesc: "Memimpin Tim Operasi",
    phone: "08161485564",
    address: "Jl. Kelinci No. 6D",
    timeLogged: [{
      arrival: '2019-08-26T14:32:25.134+00:00',
      leave: '2019-08-26T14:41:02.050+00:00',
    }],
    createdAt: "2019-08-26T10:44:03.765Z",
    updatedAt: "2019-08-26T10:44:03.765Z",
    photos: {
      Bucket: 'herman-photos',
      Name: 'yuda1.jpg'
    }
  }]
  return (
    <SafeAreaView>
      {/* <View style={style.home}> */}
      <Text style={style.h1}>
        Employee List
      </Text>
      <ScrollView style={style.home}>
        {
          data.map((val, idx) => <CardEmployee key={val._id} {...val}/>)
        }
      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f5fafe',
  },
  home: {
    paddingTop: 25,
    height: 'auto',
    backgroundColor: '#f5fafe',
    // alignItems: 'center',
    // justifyContent: 'center',
    height: Dimensions.get('screen').height,
  },
  h1: {
    fontWeight:  '800',
    fontSize: 24,
    paddingBottom: 10,
    alignSelf: 'flex-start',
    textAlign: 'left',
    marginLeft: '10%',
    color: '#0C344A'
  },
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '-15%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    height: 100,
    width: '90%',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0, 
      height: 3
    },
    shadowOpacity: 0.10,
    shadowRadius: 2.22,
    elevation: 3
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
})

const mapDispatchToProps = {
  signIn
}

export default connect(null, mapDispatchToProps)(UserListPage)
