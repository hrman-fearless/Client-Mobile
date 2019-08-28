import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, ScrollView } from 'react-native';
import { signIn, fetchDashboard } from '../store/action/index.js';
import { getToken } from '../helpers/async-storage';
import { hourNow } from '../helpers/textual-date';
import { connect } from 'react-redux';
import CardAbsent from '../components/mini-card-absent';
import LoadingScreen from './page-test';
import ButtonLeave from '../components/button-leave';

const DashboardPage = (props) => {
  const [today, setToday] = useState(new Date())
  const { userId, loggedUser, fetchDashboard, isLoading, navigation } = props
  useEffect(()=> {
    fetch()
  }, [])

  const fetch = async () => {
    const id = await getToken('id')
    fetchDashboard(id)
  }

  const goHome = async () => {
    console.log('Ayo Kabur');
    navigation.navigate('Ciao')
  }

  if(loggedUser) {
    return (
      <SafeAreaView>
        <View style={style.header}>
          <Image
            style={style.avatar}
            source={{uri: `https://${loggedUser.data.photos.Bucket}.s3-ap-southeast-1.amazonaws.com/${loggedUser.data.photos.Name}`}}
            />
          <View style={style.headerText}>
            <Text style={style.headerHalo}>Hello,</Text>
            <Text style={style.headerName}>{loggedUser.data.fullname}</Text>
            <Text style={style.headerTitle}>{loggedUser.data.title}</Text>
          </View>
        </View>
        <View style={style.timeStamp}>
          <View style={style.arrival}>
            <Text style={style.arrivalText}>Arrival</Text>
            <Text style={style.time}>{hourNow(loggedUser.data.timeLogged[loggedUser.data.timeLogged.length-1].arrival)}</Text>
          </View>
          <View style={style.leave}>
            <Text style={style.leaveText}>Leave</Text>
            <Text style={style.time}>{hourNow(loggedUser.data.timeLogged[loggedUser.data.timeLogged.length-1].leave)}</Text>
          </View>
          <View style={style.leave}>
            <Text style={style.leaveText}>Go Home</Text>
            <ButtonLeave functionPayload={goHome} />
          </View>
        </View>
        <Text style={style.h1}>Weekly Log</Text>
        <ScrollView style={style.home} showsVerticalScrollIndicator={false}>
          {
            loggedUser.data.timeLogged.map((val, idx) => <CardAbsent key={idx} {...val} index={idx} />)
          }
        </ScrollView>
      </SafeAreaView>
    )  
  } else {
    return <LoadingScreen/>
  }

}

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const style = StyleSheet.create({
  container: {
    backgroundColor: '#f5fafe',
  },
  home: {
    flexDirection: "column",
    alignContent: 'center',
    alignSelf: 'flex-end',
    marginTop: 20,
    paddingBottom: 20,
    width,
    height: width*.8,
  },
  header: {
    display: 'flex',
    width: Dimensions.get('screen').width,
    height: '30%',
    backgroundColor: '#f5fafe',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25
  },
  headerPhoto: {
    width: 300,
    height: 300,
    padding: 25
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginTop: '8.25%'
  },
  form: {
    padding: 20
  },
  headerName: {
    fontWeight: '800',
    fontSize: 20,
    paddingBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: '10%',
    color: '#0C344A',
    width: width*.75
  },
  headerHalo: {
    fontWeight: '800',
    fontSize: 20,
    paddingBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: '10%',
    color: '#b6c2c8'
  },
  headerTitle: {
    fontWeight: '600',
    fontSize: 14,
    paddingBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: '10%',
    color: '#0C344A'
  },
  timeStamp: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    marginTop: '-10.5%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    height: height*.14,
    width: '85%',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0, 
      height: 3
    },
    shadowOpacity: 0.10,
    shadowRadius: 2.22,
    elevation: 3,
  },
  today: {
    width: 300,
    fontWeight: '600',
    fontSize: 12,
    padding: 2.5,
    textAlign: 'center',
    flexDirection: 'column',
    marginTop: 10,
    color: '#0C344A'
  },
  arrival: {
    width: 90,
    height: 99,
    alignItems: 'center',
  },
  leave: {
    width: 90,
    height: 99,
    alignItems: 'center'
  },
  arrivalText: {
    fontWeight: '600',
    fontSize: 12,
    padding: 2.5,
    textAlign: 'center',
    marginTop: 12.5,
    color: '#0C344A'
  },
  leaveText: {
    fontWeight: '600',
    fontSize: 12,
    padding: 2.5,
    textAlign: 'center',
    marginTop: 12.5,
    color: '#0C344A'
  },
  time: {
    fontWeight: '800',
    fontSize: 16,
    padding: .5,
    textAlign: 'center',
    marginTop: 10,
    color: '#0C344A'
  },
  h1: {
    fontWeight:  '800',
    fontSize: 20,
    paddingTop: height*0.05,
    paddingBottom: height*0.01,
    alignSelf: 'flex-start',
    marginLeft: '5%',
    color: '#0C344A'
  },
})

const mapStateToProps = (state) => {
  return {
    userId: state.userId,
    loggedUser: state.loggedUser,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = {
  signIn,
  fetchDashboard
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
