import React from 'react'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import SignIn from './page-sign-in';
import Dashboard from './page/dashboard';

const StackNavigator = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null
    }
  }
})

export default createAppContainer(StackNavigator);