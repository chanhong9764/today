import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 예시 코드 입니다.
const RootStack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <></>
    // <NavigationContainer>
    //   <RootStack.Navigator initialRouteName="Entry">
    //     <RootStack.Screen
    //       name="Splash"
    //       component={Splash}
    //       options={{headerShown: false}}
    //     />
    //     <RootStack.Screen
    //       name="Entry"
    //       component={Entry}
    //       options={{headerShown: false}}
    //     />
    //     <RootStack.Screen
    //       name="Login"
    //       component={Login}
    //       options={{headerShown: false}}
    //     />
    //     <RootStack.Screen
    //       name="Main"
    //       component={Main}
    //       options={{headerShown: false}}
    //     />
    //     <RootStack.Screen
    //       name="Signup"
    //       component={Signup}
    //       options={{title: '회원가입', headerTitleAlign: 'center'}}
    //     />
    //     <RootStack.Screen
    //       name="Video"
    //       component={Video}
    //       options={{headerShown: false}}
    //     />
    //   </RootStack.Navigator>
    // </NavigationContainer>
  );
};

export default Navigator;
