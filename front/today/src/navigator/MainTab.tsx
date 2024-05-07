// Navigaior.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components/native';

import OneDayDiary from '../screens/diary/day/OneDayDiary';
import { CalendarNav } from './CalendarNav';
import { UserNav } from './UserNav';

type BottomTabParamList = {
  Main: undefined;
  OneDayDiary: undefined;
  User: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

function MainTab() {
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
        name="OneDayDiary"
        component={OneDayDiary}
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
