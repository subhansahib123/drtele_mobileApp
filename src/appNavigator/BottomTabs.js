import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

/// icons
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

/// Pages

import Profile from '../screens/Frontend/profile/Profile';
import About from '../screens/Frontend/about/About';
import NewsFeed from '../screens/Frontend/newsFeed/NewsFeed';
import Fitness from '../screens/Frontend/fitnessStats/Fitness';
import Settings from '../screens/Frontend/settings/Settings';
import Category from '../screens/Frontend/category/Category';
import Login from '../screens/auth/login/Login';
import BookingHistory from './../screens/Frontend/booking/BookingHistory';

export default function BottomTabs({navigation}) {
  const Tabs = createBottomTabNavigator();

  const {colors} = useSelector(state => state);

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel : false
      }}>
      {/* <Tabs.Screen
        name="Fitness"
        component={Fitness}
        options={{
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="home" color={color} style={{fontSize: 30}} />
          ),
          tabBarShowLabel: false,
        }}
      /> */}
      <Tabs.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="home" color={color} style={{fontSize: 30}} />
          ),
          tabBarShowLabel: false,
          headerShown : true,
            headerTitleAlign : 'center',
            headerTitleStyle :{fontWeight : 'bold',fontSize : 23},
            headerRight : ()=> <FeatherIcon name='search' size={25} style={{marginRight : 20}} color={colors?.accent?.dark}/>
          }}
      />
      
      <Tabs.Screen
        name="Booking History"
        component={BookingHistory}
        options={{
          tabBarIcon: ({size, color}) => (
            <FeatherIcon name="mail" color={color} style={{fontSize: 30}} />
          
          ),
          tabBarBadge : 4,
          headerShown : true,
          headerTitleAlign : 'center',
          headerTitleStyle: {fontSize :21,fontWeight : 'bold' },
          headerRight : ()=> <FeatherIcon name='search' size={25} style={{marginRight : 20}} color={colors?.accent?.dark}/>
          
        }}
          />
      <Tabs.Screen
        name="Fitness"
        component={Fitness}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesomeIcon name="running" color={color} style={{fontSize: 30}} />
          
          ),
          // tabBarBadge : 4,
          // headerShown : true,
          // headerTitleAlign : 'center',
          // headerTitleStyle: {fontSize :21,fontWeight : 'bold' },
          // headerRight : ()=> <FeatherIcon name='search' size={25} style={{marginRight : 20}} color={colors?.accent?.dark}/>
          
        }}
          />
      <Tabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({size, color}) => (
            <AntDesign name="setting" color={color} style={{fontSize: 30}} />
          ),
        }}
        />


      <Tabs.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({size, color}) => (
            <FeatherIcon name="user" color={color} style={{fontSize: 30}} />
          ),
          
        }}
      />
    </Tabs.Navigator>
  );
}

