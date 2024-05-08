import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { NativeBaseProvider } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { IsLoginProvider } from './src/contexts/IsLoginContext';
import RootStack from './src/navigator/RootStack';
import theme from './src/styles/theme';

export default function App() {
  // 폰트 load
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
