import styled, { css, DefaultTheme } from 'styled-components/native';

export const center = css`
  justify-content: center;
  align-items: center;
`;
export const MyPageContainer = styled.SafeAreaView`
  flex: 1;
  padding: 30px;
`;

export const MyPageTitle = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSize.big};
  font-weight: ${({ theme }: { theme: DefaultTheme }) => theme.fontWeight.bold};
  box-shadow: 2px 2px 2px lightgray;
`;

export const MyPageSubTitle = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSize.medium};
  font-weight: ${({ theme }: { theme: DefaultTheme }) => theme.fontWeight.bold};
  box-shadow: 2px 2px 2px lightgray;
`;
