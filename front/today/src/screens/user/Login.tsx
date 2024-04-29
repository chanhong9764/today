import * as Linking from 'expo-linking';
import React from 'react';
import { Text } from 'react-native';
import * as S from './style';

function Login() {
  const BASE_URL = process.env.BASE_URL;
  const kakaoURL = `${BASE_URL}/oauth2/authorization/kakao?mode=login`;
  // const naverURL = `${VITE_SERVICE_BASE_URL}/oauth2/authorization/naver?redirect_uri=${VITE_REDIRECT_URL}&mode=login`;

  const kakaoLoginClick = () => {
    Linking.openURL(kakaoURL);
  };

  // const naverLoginClick = () => {
  //     window.location.href = naverURL;
  // };
  return (
    <S.LoginContainer>
      <S.Logo>당일</S.Logo>
      <Text>
        <S.PointWord>당</S.PointWord>신만의 특별한 <S.PointWord>일</S.PointWord>기를 작성하세요
      </Text>
      <S.LoginButtonsContainer>
        <S.LinkButton onPress={kakaoLoginClick}>
          <S.LoginButton source={require('../../../assets/kakao-logo.png')} resizeMode="stretch" />
        </S.LinkButton>
        <S.LinkButton>
          <S.LoginButton source={require('../../../assets/naver-logo.png')} resizeMode="stretch" />
        </S.LinkButton>
      </S.LoginButtonsContainer>
    </S.LoginContainer>
  );
}

export default Login;
