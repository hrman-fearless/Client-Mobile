import React from 'react'
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignIn from './page-sign-in';
import Dashboard from './page-dashboard';
import Settings from './page-settings';
import Employee from './page-users';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator({
  Dashboard: Dashboard,
  Employee: Employee,
  Settings: Settings
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: null,
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      // let IconComponent = Ionicons;
      // let iconName;

      if (routeName === 'Home') {
        iconName = `ios-home`;
        // Sometimes we want to add badges to some icons. 
        // You can check the implementation below.
      } else if (routeName === 'Movies') {
        iconName = `ios-videocam`;
      } else if (routeName === 'Actor') {
        iconName = `ios-people`;
      }
      // return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }
})

const Landing = {
  screen: SignIn,
  navigationOptions: {
    header: null
  }
}

export default createAppContainer(createSwitchNavigator({
  Landing: Landing,
  Other: TabNavigator
}));