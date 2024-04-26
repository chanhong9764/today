import styled, { DefaultTheme } from 'styled-components/native';

export const DiaryContainer = styled.TextInput`
  flex: 4;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSize.regular};
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.lightPink};
  box-shadow: 2px 2px 2px ${({ theme }: { theme: DefaultTheme }) => theme.colors.middlePink};
`;

export const CountText = styled.Text`
  align-items: flex-end;
`;
