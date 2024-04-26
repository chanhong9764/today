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

export const LoginContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.lightPink};
`;

export const Logo = styled.Text`
  font-family: title;
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSize.large};
`;

export const PointWord = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.pink};
`;

export const LoginButtonsContainer = styled.View`
  width: 100%;
  align-items: center;
  padding: 10px;
`;

export const LoginButton = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const LinkButton = styled.TouchableOpacity`
  width: 80%;
  height: 70px;
  margin: 7px 0px;
  box-shadow: 2px 2px 2px lightgray;
`;
