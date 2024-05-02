import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Graph from '../../components/user/Graph';
import { UserProp } from '../../types/stack';
import * as S from './style';

function Mypage({ navigation }: UserProp) {
  // useEffect(() => {
  //   Members.getMembers()
  //     .then(res => {})
  //     .catch(err => {
  //       console.log(err);
  //     });
  // });

  return (
    <S.MyPageContainer>
      <S.MyPageTitle>MY PAGE</S.MyPageTitle>
      <S.MyPageSubTitle>MY INFO</S.MyPageSubTitle>
      <S.MyInfo>
        <S.MyInfoTitle>닉네임</S.MyInfoTitle>
        <S.MyInfoContent>
          <Text>potato</Text>
        </S.MyInfoContent>
      </S.MyInfo>
      <S.MyInfo>
        <S.MyInfoTitle>이메일</S.MyInfoTitle>
        <S.MyInfoContent>
          <Text>potato@naver.com</Text>
        </S.MyInfoContent>
      </S.MyInfo>

      <S.MyPageSubTitle>김유정 님의 성향은</S.MyPageSubTitle>
      <S.MyPageSubTitle>김유정 님의 감정은</S.MyPageSubTitle>
      <Graph
        labels={['행복', '슬픔', '분노', '짜증', '불안', '놀람']}
        data={[8, 7, 9, 5, 6, 10]}
        chartTitle="나의 감정통계"
      />
      <TouchableOpacity onPress={() => navigation.navigate('KakaoLogin')}>
        <Text>버튼</Text>
      </TouchableOpacity>
    </S.MyPageContainer>
  );
}

export default Mypage;
