import styled, { DefaultTheme } from 'styled-components/native';

export const MyPageTitle = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSize.big}px;
  font-weight: ${({ theme }: { theme: DefaultTheme }) => theme.fontWeight.bold};
`;
