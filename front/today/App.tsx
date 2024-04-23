import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navigator from './src/navigator/Navigator';
import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
