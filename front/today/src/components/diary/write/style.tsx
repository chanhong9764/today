import styled, { css } from 'styled-components/native';

export const full = css`
  height: 100%;
  width: 100%;
`;

export const DiaryContainer = styled.View`
  flex: 4;
  ${full}
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lightPink};
  box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.middlePink};
  align-items: flex-end;
  padding: 18px 22px;
`;

export const DiaryContent = styled.TextInput`
  flex: 9;
  ${full}
  font-size: ${({ theme }) => theme.fontSize.regular};
`;

export const CountText = styled.Text`
  flex: 1;
  color: gray;
`;
