import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Navigator from './src/navigator/Navigator';
import theme from './src/styles/theme';

export default function App() {
  const [isFont, setIsFont] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        title: require('./assets/fonts/온글잎 의연체.ttf'),
      });
      setIsFont(true);
    };
    loadFonts();
  }, []);

  // 로그인 상태 관리
  const [isLogin, setIsLogin] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {/* {isLogin ? (
          <MainScreen /> // 로그인 되어있는 경우 홈 진입
        ) : (
          <LoginScreen /> // 로그인이 안 되어있는 경우 로그인 페이지 진입
        )} */}
        <Navigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
