import styled, { css } from 'styled-components/native';

export const center = css`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SingleDiaryContainer = styled.TouchableOpacity`
  background-color: white;
  box-shadow: 2px 2px 2px lightgray;
  padding: 20px;
  margin: 20px;
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

export const DiaryListTitleContainer = styled.Pressable`
  ${center}
  padding: 30px 0px;
`;
export const DiaryListTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
