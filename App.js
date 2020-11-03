import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicon from 'react-native-vector-icons/Octicons'
import HomeScreen from './components/home/home'
import Search from './components/search/search'
import Notifications from './components/notification/notification'
import CreatePost from './components/home/creatPost'
import Menu from './components/menu/menu.js';
import { color } from 'react-native-reanimated';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Lotus" component={HomeScreen}
      options={{
        title:"Lotus",
        headerTintColor: "#FF00FF",
        headerTitleStyle: {
          fontWeight: 'bold',
          fontStyle: 'italic'
        },
      }}
      />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: 'red',
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
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
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
        component={Notifications}
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
        component={Menu}
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
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}