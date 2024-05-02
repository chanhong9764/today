// Navigaior.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components/native';

import LoginPage from '../screens/user/LoginPage';
import { CalendarNav } from './CalendarNav';
import { DiaryNav } from './DairyNav';
import { UserNav } from './UserNav';

type BottomTabParamList = {
  Main: undefined;
  Diary: undefined;
  User: undefined;
  Login: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

function Navigaior() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.mainPink,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          padding: 12,
        },
      }}>
      <Tab.Screen
        name="Main"
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
      <Tab.Screen
        name="Login"
        component={LoginPage}
        options={{
          tabBarIcon: ({ color }) => <Icon name="user" size={27} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigaior;
