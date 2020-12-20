import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../login/login';
import Create from '../login/create';
import StoryDetail from '../story/storyDetail';
import Messenger from '../Messenger/Messenger';

const LoginStack = createStackNavigator();

export default function NavigateStackScreen() {
  return (
      <LoginStack.Navigator mode="modal" headerMode="none" initialRouteName="Login"> 
        <LoginStack.Screen name="Login" component={Login} />
        <LoginStack.Screen name="Register" component={Create} />
        <LoginStack.Screen name="StoryDetail" component={StoryDetail} />
        <LoginStack.Screen name="Messenger" component={Messenger} />
      </LoginStack.Navigator>
  );
}