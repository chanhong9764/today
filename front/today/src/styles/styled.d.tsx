import 'styled-components';

// 예시 코드 입니다.
declare module 'styled-components' {
  export interface DefaultTheme {
    mainPink: string;

    fontLarge: number;
    fontMedium: number;
    fontRegular: number;
    fontSmall: number;

    weightBold: number;
    weightMedium: number;
    weightRegular: number;

    lineHeightRegular: number;
    lineHeightMicro: number;
  }
}
