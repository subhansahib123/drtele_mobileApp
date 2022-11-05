import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

/// icons
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcons from 'react-native-vector-icons/Entypo';

/// Pages

import Profile from '../screens/Frontend/profile/Profile';
import About from '../screens/Frontend/about/About';
import NewsFeed from '../screens/Frontend/newsFeed/NewsFeed';
import Fitness from '../screens/Frontend/fitnessStats/Fitness';
import Settings from '../screens/Frontend/settings/Settings';

export default function BottomTabs({navigation}) {
  const Tabs = createBottomTabNavigator();

  const {colors} = useSelector(state => state);

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel : false
      }}>
      <Tabs.Screen
        name="Fitness"
        component={Fitness}
        options={{
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="home" color={color} style={{fontSize: 30}} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="NewsFeed"
        component={NewsFeed}
        options={{
          tabBarIcon: ({size, color}) => (
            <EntypoIcons name="news" color={color} style={{fontSize: 30}} />
          ),
        }}
      />

      <Tabs.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({size, color}) => (
            <FeatherIcon name="mail" color={color} style={{fontSize: 30}} />
            ),
            tabBarBadge: 4,
          }}
          
          />

      <Tabs.Screen
        name="Profile"
        component={Settings}
        options={{
          tabBarIcon: ({size, color}) => (
            <FeatherIcon name="user" color={color} style={{fontSize: 30}} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

