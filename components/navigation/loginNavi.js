import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../login/login';
import Create from '../login/create';

const LoginStack = createStackNavigator();

export default function LoginStackScreen() {
  return (
      <LoginStack.Navigator mode="modal" headerMode="none" initialRouteName="Login"> 
        <LoginStack.Screen name="Login" component={Login} />
        <LoginStack.Screen name="Register" component={Create} />
      </LoginStack.Navigator>
  );
}