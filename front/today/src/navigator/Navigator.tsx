// Navigaior.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components/native';

import Calendar from '../screens/calendar/Calendar';
import { DiaryNav } from './DairyNav';
import { UserNav } from './UserNav';

interface BottomTabParamList {
  Calendar: undefined;
  Diary: undefined;
  User: undefined;
}

const Tab = createBottomTabNavigator();

function Navigaior() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Calendar"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.mainPink,
        tabBarShowLabel: false,
        tabBarStyle: {
          padding: 12,
        },
      }}>
      <Tab.Screen
        name="Calendar"
        component={Calendar}
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

export default Navigaior;
