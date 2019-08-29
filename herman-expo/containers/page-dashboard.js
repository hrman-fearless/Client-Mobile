import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, ScrollView } from 'react-native';
import { signIn, fetchDashboard, letsGoHome } from '../store/action/index.js';
import { getToken } from '../helpers/async-storage';
import { hourNow, getToday, getMonthNow } from '../helpers/textual-date';
import { connect } from 'react-redux';
import CardAbsent from '../components/mini-card-absent';
import LoadingScreen from './page-test';
import ButtonLeave from '../components/button-leave';
import { LinearGradient } from 'expo-linear-gradient';

const DashboardPage = (props) => {
  const [today, setToday] = useState(new Date().getDay()-1)
  const { userId, loggedUser, fetchDashboard, isLoading, navigation, letsGoHome } = props
  useEffect(()=> {
    fetch()
  }, [])

  const fetch = async () => {
    const id = await getToken('id')
    fetchDashboard(id)
  }

  const goHome = async () => {
    console.log('Kabur');
    navigation.navigate('Leave')
    const id = await getToken('id')
    letsGoHome(id)
  }

  
  
  if(loggedUser) {
    let todayComp = new Date();
    todayComp = todayComp.getUTCFullYear() + '/' + todayComp.getUTCMonth() + '/' + todayComp.getUTCDate();
    let lastTimeLogged = (loggedUser.data.timeLogged[loggedUser.data.timeLogged.length-1]) && loggedUser.data.timeLogged[loggedUser.data.timeLogged.length-1].arrival || new Date("2000/01/01");
    lastTimeLogged = new Date(lastTimeLogged).getUTCFullYear() + '/' + new Date(lastTimeLogged).getUTCMonth() + '/' + new Date(lastTimeLogged).getUTCDate();
    console.log(todayComp, lastTimeLogged);
    return (
      <SafeAreaView>
        <View style={style.wrapperHeader}>
          <View style={style.header}>
            <Image
              style={style.avatar}
              source={{uri: `https://${loggedUser.data.photos.Bucket}.s3.amazonaws.com/${loggedUser.data.photos.Name}`}}
              />
            <View style={{alignSelf: "flex-start", width: Dimensions.get('screen').width*.75, marginLeft: 10}}>
              <Text style={style.headerHalo}>Hello,</Text>
              <Text style={style.headerName}>{loggedUser.data.fullname}</Text>
              <Text style={style.headerTitle}>{loggedUser.data.title}</Text>
            </View>
          </View>
          <Text style={style.timeNow}>{getToday(new Date().getDay())}, {new Date().getDate()} {getMonthNow(new Date().getMonth())} {new Date().getFullYear()}</Text>
          <View style={style.timeStamp}>
            <View style={style.arrival}>
              <Text style={style.arrivalText}>Arrival</Text>
              {
                (todayComp === lastTimeLogged) ? <Text style={style.time}>{hourNow(loggedUser.data.timeLogged[loggedUser.data.timeLogged.length-1].arrival)}</Text> : <Text style={style.time}>-</Text>
              }
            </View>
            <View style={style.leave}>
              <Text style={style.leaveText}>Leave</Text>
              {
                (todayComp === lastTimeLogged) ? <Text style={style.time}>{hourNow(loggedUser.data.timeLogged[loggedUser.data.timeLogged.length-1].leave)}</Text> : <Text style={style.time}>-</Text>
              }
            </View>
            <View style={style.leave}>
              <Text style={style.leaveText}>Go Home</Text>
              {
                (loggedUser.data.timeLogged[loggedUser.data.timeLogged.length-1] !== undefined && loggedUser.data.timeLogged.length-1 === today && loggedUser.data.timeLogged[loggedUser.data.timeLogged.length-1].leave === undefined) ? <ButtonLeave functionPayload={goHome} status={true}/> : <ButtonLeave functionPayload={goHome} status={false} />
              }
            </View>
          </View>
          
          <View style={style.absent}>
            <Text style={style.h1}>Weekly Log</Text>
            <ScrollView style={style.scroll} showsVerticalScrollIndicator={false}>
              {
                loggedUser.data.timeLogged.map((val, idx) => <CardAbsent key={idx} {...val} index={idx} />)
              }
            </ScrollView>
          </View>
          
        </View>
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
    paddingLeft: 3.5,
    paddingRight: 3.5,
    height: width*.8,
  },
  wrapperHeader: {
    paddingTop: height*.05,
    backgroundColor: '#fff'
  },
  header: {
    display: 'flex',
    width: Dimensions.get('screen').width,
    height: height*.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: height*.025,
    paddingHorizontal: '5%'
  },
  headerPhoto: {
    width: 300,
    height: 300,
    padding: 25,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: height*.3
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: '3.5%',
    marginTop: '5%'
  },
  form: {
    padding: 20
  },
  headerName: {
    fontWeight: '800',
    fontSize: 20,
    paddingBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: '5%',
    color: '#0C344A',
  },
  headerHalo: {
    fontWeight: '800',
    fontSize: 24,
    paddingBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: '5%',
    color: '#547080',
    opacity: 0.4

  },
  headerTitle: {
    fontWeight: '800',
    fontSize: 14,
    paddingBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: '5%',
    color: '#0C344A'
  },
  timeStamp: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    marginTop: '-10.5%',
    alignSelf: 'center',
    backgroundColor: '#006AFF',
    height: height*.14,
    width: '85%',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0, 
      height: 3
    },
    shadowOpacity: 0.40,
    shadowRadius: 2.5,
    elevation: 3,
    // opacity: 0.2
  },
  today: {
    width: 300,
    fontWeight: '600',
    fontSize: 12,
    padding: 2.5,
    textAlign: 'center',
    flexDirection: 'column',
    marginTop: 10,
    color: '#FFF'
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
    color: '#F5FAFE'
  },
  leaveText: {
    fontWeight: '600',
    fontSize: 12,
    padding: 2.5,
    textAlign: 'center',
    marginTop: 12.5,
    color: '#F5FAFE'
  },
  time: {
    fontWeight: '800',
    fontSize: 16,
    padding: .5,
    textAlign: 'center',
    marginTop: 10,
    color: '#fff'
  },
  timeNow: {
    fontWeight: '800',
    fontSize: 14,
    padding: .5,
    textAlign: 'center',
    color: '#547080',
    marginTop: -height*.075,
    marginBottom: height*.075
  },
  h1: {
    fontWeight:  '800',
    fontSize: 20,
    paddingTop: height*.03,
    paddingBottom: height*.03,
    alignSelf: 'flex-start',
    marginLeft: '5%',
    color: '#0C344A'
  },
  absent: {
    width: width,
    marginTop: -height*.05,
    paddingTop: height*.05, 
    zIndex: -99,
  },
  scroll: {
    height: height*.275,
  }
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
  fetchDashboard,
  letsGoHome
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)

          {/* <LinearGradient
            colors={['rgba(0, 106, 255, 1)', 'transparent']}
            style={style.gradient}/> */}