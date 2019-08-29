import React from 'react'
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignIn from './page-sign-in';
import Dashboard from './page-dashboard';
import Settings from './page-settings';
import Employee from './page-users';
import Leave from './page-leave';
import { AntDesign } from '@expo/vector-icons';

const TabNavigator = createBottomTabNavigator({
  Dashboard: Dashboard,
  Employee: Employee,
  Settings: Settings,
  // Leave: Leave
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: null,
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = AntDesign;
      let iconName;

      if (routeName === 'Dashboard') {
        iconName = `home`;
      } else if (routeName === 'Employee') {
        iconName = `user`;
      } else if (routeName === 'Settings') {
        iconName = `setting`;
      }
      return <IconComponent name={iconName} size={18} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#0029ff',
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
  Other: TabNavigator,
  Leave: Leave
}));