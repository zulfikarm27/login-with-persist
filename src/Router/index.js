import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  LoginScreen,
  RegisterScreen,
  SplashScreen,
  DashboardScreen,
} from '../Pages';
const Stack = createStackNavigator();
const header = {headerShown: false};
export default class Router extends Component {
  render() {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={header}
          />
          <Stack.Screen name="Login" component={LoginScreen} options={header} />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={header}
          />
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={header}
          />
        </Stack.Navigator>
      </>
    );
  }
}
