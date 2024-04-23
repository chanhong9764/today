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

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
