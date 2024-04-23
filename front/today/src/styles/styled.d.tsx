import 'styled-components/native';
import { ColorTypes, FontSizeTypes, FontWeightTypes } from './theme';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: ColorTypes;
    fontSize: FontSizeTypes;
    fontWeight: FontWeightTypes;
  }
}
