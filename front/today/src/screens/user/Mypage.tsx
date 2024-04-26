import React from 'react';
import Graph from '../../components/user/Graph';
import * as S from './style';

function Mypage() {
  return (
    <S.MyPageContainer>
      <S.MyPageTitle>MY PAGE</S.MyPageTitle>
      <S.MyPageSubTitle>김유정 님의 성향은</S.MyPageSubTitle>
      <S.MyPageSubTitle>김유정 님의 감정은</S.MyPageSubTitle>
      <Graph
        labels={['행복', '슬픔', '분노', '짜증', '불안', '놀람']}
        data={[8, 7, 9, 5, 6, 10]}
        chartTitle="나의 감정통계"
      />
    </S.MyPageContainer>
  );
}

export default Mypage;
