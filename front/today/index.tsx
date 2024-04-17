import React from 'react';
import { AppRegistry } from 'react-native';

import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import Navigator from './src/navigator/Navigator';

// 예시 코드 입니다.
const ProvidedNavigator = () => {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <Navigator />
    </ThemeProvider>
  );
};

AppRegistry.registerComponent('today', () => ProvidedNavigator);
