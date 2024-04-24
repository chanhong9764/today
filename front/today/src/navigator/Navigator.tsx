// Navigaior.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Calendar from '../screens/calendar/Calendar';
import DiaryDetail from '../screens/diary/DiaryDetail';
import DiaryEdit from '../screens/diary/DiaryEdit';
import DiaryList from '../screens/diary/DiaryList';
import SelectImage from '../screens/diary/SelectImage';
import WriteDiary from '../screens/diary/WriteDiary';
import SelectEmotion from '../screens/emotion/SelectEmotion';
import Login from '../screens/user/Login';
import Mypage from '../screens/user/Mypage';

type BottomTabParamList = {
  Calendar: undefined;
  Diary: undefined;
  User: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();
const DiaryStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();

const Diary = () => {
  return (
    <DiaryStack.Navigator initialRouteName="DiaryList" screenOptions={{ headerShown: false }}>
      <DiaryStack.Screen name="DiaryList" component={DiaryList} />
      <DiaryStack.Screen name="SelectEmotion" component={SelectEmotion} />
      <DiaryStack.Screen name="SelectImage" component={SelectImage} />
      <DiaryStack.Screen name="DiaryEdit" component={DiaryEdit} />
      <DiaryStack.Screen name="WriteDiary" component={WriteDiary} />
      <DiaryStack.Screen name="DiaryDetail" component={DiaryDetail} />
    </DiaryStack.Navigator>
  );
};

const User = () => {
  return (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
      <UserStack.Screen name="Mypage" component={Mypage} />
      <UserStack.Screen name="Login" component={Login} />
    </UserStack.Navigator>
  );
};

function Navigaior() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName="Calendar">
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Diary" component={Diary} />
        <Tab.Screen name="User" component={User} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigaior;
