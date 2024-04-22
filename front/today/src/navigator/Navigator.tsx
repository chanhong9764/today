// Navigaior.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Calendar from '../screens/calendar/Calendar';
import DiaryDetail from '../screens/diary/DiaryDetail';
import DiaryEdit from '../screens/diary/DiaryEdit';
import DiaryList from '../screens/diary/DiaryList';
import SelectEmotion from '../screens/diary/SelectEmotion';
import SelectImage from '../screens/diary/SelectImage';
import WriteDiary from '../screens/diary/WriteDiary';
import Login from '../screens/user/Login';
import Mypage from '../screens/user/Mypage';

type BottomTabParamList = {
  Calendar: undefined;
  DiaryList: undefined;
  Mypage: undefined;
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator<BottomTabParamList>();

function ButtomNavigator() {
  return (
    <Tab.Navigator initialRouteName="Calendar">
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="DiaryList" component={DiaryList} />
      <Tab.Screen name="Mypage" component={Mypage} />
    </Tab.Navigator>
  );
}

function Navigaior() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="ButtomNavigator" component={ButtomNavigator} />
        <Stack.Screen name="DiaryDetail" component={DiaryDetail} />
        <Stack.Screen name="SelectEmotion" component={SelectEmotion} />
        <Stack.Screen name="SelectImage" component={SelectImage} />
        <Stack.Screen name="DiaryEdit" component={DiaryEdit} />
        <Stack.Screen name="WriteDiary" component={WriteDiary} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigaior;
