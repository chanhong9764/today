import styled, { css } from 'styled-components/native';

export const center = css`
  justify-content: center;
  align-items: center;
`;

export const WriteDiaryInner = styled.View`
  ${center};
  flex: 1;
  padding: 20px;
`;

export const WriteDiaryTitle = styled.Text`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const WriteDiaryButton = styled.View`
  ${center};
  flex: 2;
  width: 100%;
`;

export const TodayDate = styled.Text`
  ${center};
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
