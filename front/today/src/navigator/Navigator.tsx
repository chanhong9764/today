// Navigaior.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Calendar from '../screens/calendar/Calendar';
import DiaryList from '../screens/diary/DiaryList';
import Mypage from '../screens/user/Mypage';

type BottomTabParamList = {
  Calendar: undefined;
  DiaryList: undefined;
  Mypage: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

function Navigaior() {
  return (
    <Tab.Navigator initialRouteName="Calendar">
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="DiaryList" component={DiaryList} />
      <Tab.Screen name="Mypage" component={Mypage} />
    </Tab.Navigator>
  );
}

export default Navigaior;
