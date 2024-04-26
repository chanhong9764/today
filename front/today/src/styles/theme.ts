import { DefaultTheme } from 'styled-components/native';

const colors = {
  pink: 'rgb(255, 125, 125)',
  mainPink: 'rgb(255, 151, 151)',
  middlePink: 'rgb(255, 221, 221)',
  lightPink: 'rgb(255, 244, 244)',
};

const fontSize = {
  large: 80,
  big: 40,
  medium: 22,
  regular: 18,
  small: 12,
};

const fontWeight = {
  bold: 700,
  medium: 600,
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
