import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicon from 'react-native-vector-icons/Octicons'
import Entyicon from 'react-native-vector-icons/Entypo'
import CreatePost from './components/home/creatPost'
import HomeStackScreen from './components/navigation/homeNavi';
import LoginStackScreen from './components/navigation/loginNavi';
import VideoStackScreen from './components/navigation/videoNavi';
import NotiStackScreen from './components/navigation/notificationNavi';
import MenuStackScreen from './components/navigation/menuNavi';
import { Root } from "native-base";


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: '#f1538e',
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Entyicon name="folder-video" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Octicon name="diff-added" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotiStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const rootStack = createStackNavigator();
export default function App() {
  return (
    <Root>
      <NavigationContainer>
      <rootStack.Navigator headerMode="none">
        {/* <rootStack.Screen name="Login" component={LoginStackScreen} /> */}
        <rootStack.Screen name="MainTab" component={MyTabs} />
      </rootStack.Navigator>
    </NavigationContainer>
    </Root>
  );
}