import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Button from '../components/button';
import Logo from '../assets/herman-logo.png';
import { signIn } from '../store/action/index.js';
import { getToday, getMonthNow, hourNow } from '../helpers/textual-date';
import { connect } from 'react-redux';

const DashboardPage = (props) => {
  const [today, setToday] = useState(new Date())
  const data = {
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
    }

  return (
    <SafeAreaView>
      <View style={style.header}>
        <Image
          style={style.avatar}
          source={{uri: `https://${data.photos.Bucket}.s3-ap-southeast-1.amazonaws.com/${data.photos.Name}`}}
          />
        <View style={style.headerText}>
          <Text style={style.headerName}>{data.fullname}</Text>
          <Text style={style.headerTitle}>{data.title}</Text>
        </View>
      </View>
      <View style={style.timeStamp}>
        {/* <Text style={style.today}>{getToday(today.getDay())}, {today.getDate()} {getMonthNow(today.getMonth())} {today.getFullYear()}</Text> */}
        <View style={style.arrival}>
          <Text style={style.arrivalText}>Arrival</Text>
          <Text style={style.time}>{hourNow(data.timeLogged[0].arrival)}</Text>
        </View>
        <View style={style.leave}>
          <Text style={style.leaveText}>Leave</Text>
          <Text style={style.time}>{hourNow(data.timeLogged[0].leave)}</Text>
        </View>
      </View>
      <View style={style.home}>
        <Text>
          Dashboard
        </Text>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f5fafe',
    // backgroundColor: 'blue',
  },
  home: {
    marginTop: 80,
    // height: Dimensions.get('screen').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    width: Dimensions.get('screen').width,
    height: '40%',
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
    // alignSelf: 'flex-end'
  },
  form: {
    padding: 20
  },
  headerName: {
    fontWeight:  '800',
    fontSize: 24,
    paddingBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: '10%',
    color: '#0C344A'
  },
  headerTitle: {
    fontWeight: '600',
    fontSize: 16,
    paddingBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: '10%',
    color: '#0C344A'
  },
  timeStamp: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '-15%',
    alignSelf: 'center',
    paddingLeft: 50,
    paddingRight: 50,
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
    backgroundColor: 'black',
    alignItems: 'center'
  },
  arrivalText: {
    fontWeight: '600',
    fontSize: 12,
    padding: 2.5,
    textAlign: 'center',
    // marginTop: 17.5,
    color: '#0C344A'
  },
  leaveText: {
    fontWeight: '600',
    fontSize: 12,
    padding: 2.5,
    textAlign: 'center',
    marginTop: 17.5,
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
  // input: {
  //   height: 40,
  //   width: 300,
  //   borderColor: 'grey',
  //   borderWidth: 1,
  //   borderRadius: 25,
  //   paddingLeft: 15
  // },
  // h1: {
  //   fontWeight:  '800',
  //   fontSize: 24,
  //   paddingBottom: 10,
  //   alignSelf: 'flex-start',
  //   marginLeft: '10%',
  // },
  // label: {
  //   fontWeight: '600',
  //   fontSize: 14,
  //   marginLeft: 10,
  //   paddingTop: 10,
  //   paddingBottom: 10
  // },
  // placeholder: {
  //   margin: 5,
  //   fontSize: 14
  // }
})

const mapDispatchToProps = {
  signIn
}

export default connect(null, mapDispatchToProps)(DashboardPage)
