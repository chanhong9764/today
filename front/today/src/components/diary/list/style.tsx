import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';

type ImageContainerProps = {
  backgroundColor: string;
};

export const center = css`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SingleDiaryContainer = styled.TouchableOpacity<ImageContainerProps>`
  background-color: ${props => props.backgroundColor || 'transparent'};
  padding: 20px;
  margin: 20px 35px;
  border-radius: 3px;
  ${Platform.select({
    ios: `
      shadow-color: #ffffff;
      shadow-offset: {width: 10, height: 10};
      shadow-opacity: 0.5;
      shadow-radius: 10;
    `,
    android: `
      elevation: 6;
    `,
  })}
`;

export const SingleDiaryContent = styled.View`
  ${center}
  flex-direction: row;
  padding: 30px 0px;
`;

export const SingleDiaryDates = styled.View`
  margin: 0px 20px;
`;

export const SingleDiaryDate = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const SingleDiaryTextContainer = styled.View``;
export const SingleDiaryText = styled.Text`
  flex: 1 1 0;
`;

export const DiaryListTitleContainer = styled.Pressable`
  ${center}
  padding: 20px 0px;
`;
export const DiaryListTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const DefaultImage = styled.View`
  justify-content: center;
  align-items: flex-end;
  border: 1px solid #f5f5f5;
  height: 200px;
  width: '100%';
  padding: 20px;
  border-radius: 3px;
`;

export const DefaultText = styled.Text`
  font-family: title;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
