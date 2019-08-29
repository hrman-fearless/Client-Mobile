import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import CardEmployee from '../components/mini-card-employee';
import { fetchUsers, loadingStart } from '../store/action/index.js';
import { connect } from 'react-redux';
import LoadingScreen from './page-test';

const UserListPage = (props) => {
  const { fetchUsers, allUsers } = props
  const [today, setToday] = useState(new Date().getDay())
  // Additional Add Arrived Status

  useEffect(() => {
    fetchAllUsers()
  }, [])
  
  const fetchAllUsers = async () => {
    loadingStart()
    fetchUsers()
  }
  
  if (allUsers !== null) {
    return (
      <SafeAreaView style={{ backgroundColor: '#f5fafe'}}>
        <View style={{ marginTop: 25 }}>
          <Text style={style.h1}>
            Employee List
          </Text>
          <ScrollView style={style.home}>
            { allUsers.data.map((val, idx) => <CardEmployee key={val._id} {...val} today={today}/>) }
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  } else {
    return <LoadingScreen/>
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f5fafe',
  },
  home: {
    paddingTop: 25,
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

const mapStateToProps = (state) => {
  return {
    allUsers: state.allUsers,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = {
  fetchUsers,
  loadingStart
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage)
