import styled from 'styled-components/native';

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
  justify-content: center;
  align-items: center;
`;

export const TotalDays = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const DayBoxContainer = styled.View`
  width: 14.2%;
  height: 90px;
  justify-content: center;
  align-items: center;
`;

export const ImageBackgroundStyled = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  resizemode: cover;
`;

export const DateText = styled.Text<{ textColor: string }>`
  color: ${({ textColor }) => textColor};
  font-size: 16px;
  font-weight: bold;
`;

export const PrevNextText = styled.Text`
  color: lightgray;
  font-weight: 300;
  font-size: 16px;
`;

export const DayText = styled.Text<{ day: string }>`
  color: ${({ day }) => (day === 'Sun' ? 'tomato' : day === 'Sat' ? 'royalblue' : 'gray')};
`;
