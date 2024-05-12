import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import * as Notifications from 'expo-notifications';
import { NativeBaseProvider } from 'native-base';
import React, { useEffect, useState } from 'react';
import { setCustomText } from 'react-native-global-props';
import { ThemeProvider } from 'styled-components';
import { registerForPushNotification } from './src/components/notification/notification';
import { IsLoginProvider } from './src/contexts/IsLoginContext';
import RootStack from './src/navigator/RootStack';
import theme from './src/styles/theme';

// 알림 핸들러 설정
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [isFont, setIsFont] = useState(false);

  useEffect(() => {
    // 푸시 알림 등록 설정
    registerForPushNotification();

    // 폰트 load
    const loadFonts = async () => {
      await Font.loadAsync({
        title: require('./assets/fonts/온글잎 의연체.ttf'),
        base: require('./assets/fonts/PRETENDARD-MEDIUM.otf'),
      });
      setIsFont(true);
    };
    loadFonts();

    // 폰트 전역 설정
    const customTextProps = {
      style: {
        fontFamily: 'base',
      },
    };
    setCustomText(customTextProps);
  }, []);

  // 폰트 로딩 중에는 렌더링을 방지
  if (!isFont) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <IsLoginProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </IsLoginProvider>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
