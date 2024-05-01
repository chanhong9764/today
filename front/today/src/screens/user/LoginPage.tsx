import React from 'react';
import { Text } from 'react-native';
import { UserProp } from '../../types/stack';
import * as S from './style';

function LoginPage({ navigation }: UserProp) {
  return (
    <S.LoginContainer>
      <S.Logo>당일</S.Logo>
      <Text>
        <S.PointWord>당</S.PointWord>신만의 특별한 <S.PointWord>일</S.PointWord>기를 작성하세요
      </Text>
      <S.LoginButtonsContainer>
        <S.LinkButton onPress={() => navigation.navigate('KakaoLogin')}>
          <S.LoginButton source={require('../../../assets/kakao-logo.png')} resizeMode="stretch" />
        </S.LinkButton>
        <S.LinkButton>
          <S.LoginButton source={require('../../../assets/naver-logo.png')} resizeMode="stretch" />
        </S.LinkButton>
      </S.LoginButtonsContainer>
    </S.LoginContainer>
  );
}

export default LoginPage;
