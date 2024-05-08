import styled, { css } from 'styled-components/native';

export const center = css`
  justify-content: center;
  align-items: center;
`;

export const shadow = css`
  box-shadow: 2px 2px 2px lightgray;
`;

// 마이페이지
export const MyPage = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  ${center}
`;

export const MyPageContainer = styled.View`
  flex: 1;
`;

export const MyPageTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  ${shadow}
`;

export const MyPageSubTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  ${shadow}
  margin: 30px 0px;
`;

export const MyInfoTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-right: 20px;
  flex: 2;
`;

export const MyInfoContent = styled.View`
  ${center}
  ${shadow}
  background-color: white;
  border: 1px black solid;
  border-radius: 10px;
  padding: 10px 15px;
  flex: 8;
`;

export const MyInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin-bottom: 10px;
`;

// 로그인 페이지
export const LoginContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightPink};
`;

export const Logo = styled.Text`
  font-family: title;
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const PointWord = styled.Text`
  color: ${({ theme }) => theme.colors.pink};
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
