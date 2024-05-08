import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext, useEffect } from 'react';
import { IsLoginContext, useIsLoginState } from '../contexts/IsLoginContext';
import LoginScreen from '../screens/LoginScreen';
import KakaoLogin from '../screens/user/KakaoLogin';
import { RootStackParam } from '../types/navigatortype/stack';
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
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isLogin ? (
        <Stack.Screen name="MainTab" component={MainTab} />
      ) : (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="KakaoLogin" component={KakaoLogin} options={{ headerShown: false }} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default RootStack;
