import { DefaultTheme } from 'styled-components/native';

const colors = {
  pink: 'rgb(255, 125, 125)',
  mainPink: 'rgba(255, 125, 125, 0.8)',
  lightPink: 'rgba(255, 125, 125, 0.1)',
};

const fontSize = {
  large: 80,
  big: 24,
  medium: 22,
  regular: 18,
  small: 12,
};

const fontWeight = {
  bold: 700,
  medium: 500,
  regular: 400,
};

export type ColorTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;
export type FontWeightTypes = typeof fontWeight;

const theme: DefaultTheme = {
  colors,
  fontSize,
  fontWeight,
};

export default theme;
