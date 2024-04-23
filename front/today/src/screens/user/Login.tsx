import React from 'react';
import { Dimensions, Text } from 'react-native';
import styled from 'styled-components/native';

const LoginContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightPink};
`;

const Logo = styled.Text`
  font-family: title;
  font-size: ${({ theme }) => theme.fontSize.large};
`;

const PointWord = styled.Text`
  color: ${({ theme }) => theme.colors.pink};
`;

const LoginButtonsContainer = styled.View`
  width: 100%;
  align-items: center;
  padding: 10px;
`;

const windowWidth = Dimensions.get('window').width;

const LoginButton = styled.Image`
  width: 80%;
  height: 70px;
  box-shadow: 2px 2px 2px #acacac;
  margin: 5px 0px;
`;

function Login() {
  return (
    <LoginContainer>
      <Logo>당일</Logo>
      <Text>
        <PointWord>당</PointWord>신만의 특별한 <PointWord>일</PointWord>기를 작성하세요
      </Text>
      <LoginButtonsContainer>
        <LoginButton source={require('../../../assets/kakao-logo.png')} resizeMode="stretch" />
        <LoginButton source={require('../../../assets/naver-logo.png')} resizeMode="stretch" />
      </LoginButtonsContainer>
    </LoginContainer>
  );
}

export default Login;
