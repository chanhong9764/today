import { DefaultTheme } from 'styled-components';

const colors = {
  mainPink: 'rgba(255, 125, 125, 0.8)',
};

const fontSize = {
  large: 26,
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
