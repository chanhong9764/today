import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';

const center = css`
  justify-content: center;
  align-items: center;
`;

export const DayOfWeek = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 15px;
`;

export const Box = styled.View`
  width: 14.2%;
  height: 30px;
  ${center}
`;

export const TotalDays = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const DayBoxContainer = styled.View`
  width: 14.2%;
  height: 90px;
  ${center}
`;

export const ImageContainer = styled.TouchableOpacity`
  width: 95%;
  height: 95%;
  ${center}
  background-color: black;
  border-radius: 3px;
  ${Platform.select({
    ios: `
      shadow-color: #ffffff;
      shadow-offset: {width: 10, height: 10};
      shadow-opacity: 0.5;
      shadow-radius: 10;
    `,
    android: `
      elevation: 5;
    `,
  })}
`;

export const ImageBackgroundStyled = styled.ImageBackground`
  ${center}
  width: 100%;
  height: 100%;
`;

export const DateText = styled.Text<{ textColor: string }>`
  color: ${({ textColor }) => textColor};
  font-size: 16px;
  font-weight: 500;
`;

export const DateTextInImg = styled.Text<{ textColor: string }>`
  color: ${({ textColor }) => textColor};
  font-size: 16px;
  font-weight: 500;
  text-shadow: 1px 1px 3px gray;
`;

export const PrevNextText = styled.Text`
  color: lightgray;
  font-weight: 300;
  font-size: 16px;
`;

export const DayText = styled.Text<{ day: string }>`
  color: ${({ day }) => (day === 'Sun' ? 'tomato' : day === 'Sat' ? 'royalblue' : 'gray')};
`;
