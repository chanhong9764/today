// Navigaior.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components/native';
import { CalendarNav } from './CalendarStack';
import { DiaryNav } from './DairyStack';
import { UserNav } from './UserStack';
import * as Linking from 'expo-linking';

type BottomTabParamList = {
  MainScreen: undefined;
  CalendarNav: undefined;
  Diary: undefined;
  User: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

function MainTab() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="CalendarNav"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: theme.colors.mainPink,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          height: 65,
        },
      }}>
      <Tab.Screen
        name="CalendarNav"
        component={CalendarNav}
        options={{
          tabBarIcon: ({ color }) => <Icon name="calendar" size={27} color={color} />,
        }}
      />
      <Tab.Screen
        name="Diary"
        component={DiaryNav}
        options={{
          tabBarIcon: ({ color }) => <Icon name="book" size={27} color={color} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={UserNav}
        options={{
          tabBarIcon: ({ color }) => <Icon name="user" size={27} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
