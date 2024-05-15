import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { IsLoginContext, useIsLoginState } from '../contexts/IsLoginContext';
import LoginScreen from '../screens/LoginScreen';
import Intro1 from '../screens/intro/Intro1';
import Intro2 from '../screens/intro/Intro2';
import Intro3 from '../screens/intro/Intro3';
import KakaoLogin from '../screens/user/KakaoLogin';
import NotificationScreen from '../screens/user/notification/NotificationScreen';
import { RootStackParam } from '../types/navigatortype/stack';
import { CalendarNav } from './CalendarStack';
import { DiaryNav } from './DairyStack';
import MainTab from './MainTab';

const Stack = createNativeStackNavigator<RootStackParam>();

// 로그인 여부 체크

function RootStack() {
  const isLogin = useIsLoginState();
  const { setIsLogin } = useContext(IsLoginContext);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
          setIsLogin(true);
        } else {
          // 토큰이 없을 때의 로직
          setIsLogin(false);
          console.log('No token found');
        }
      } catch (error) {
        // 에러 처리
        console.error('Error reading token: ', error);
        return false;
      }
    };
    checkLogin();
  }, []);

  console.log(isLogin);

  return (
    <Stack.Navigator>
      {isLogin ? (
        <>
          <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
          <Stack.Screen name="CalendarStack" component={CalendarNav} options={{ headerShown: false }} />
          <Stack.Screen name="DiaryStack" component={DiaryNav} options={{ headerShown: false }} />
          <Stack.Screen
            name="NotificationScreen"
            component={NotificationScreen}
            options={{
              headerTitleAlign: 'center',
              headerTitle: ({ children }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontFamily: 'title', fontSize: 38 }}>알림</Text>
                </View>
              ),
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="KakaoLogin" component={KakaoLogin} options={{ headerShown: false }} />
          <Stack.Screen
            name="Intro1"
            component={Intro1}
            options={{ headerShown: false, animationTypeForReplace: 'push', animation: 'slide_from_right' }}
          />
          <Stack.Screen
            name="Intro2"
            component={Intro2}
            options={{ headerShown: false, animationTypeForReplace: 'push', animation: 'slide_from_right' }}
          />
          <Stack.Screen
            name="Intro3"
            component={Intro3}
            options={{ headerShown: false, animationTypeForReplace: 'push', animation: 'slide_from_right' }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default RootStack;
