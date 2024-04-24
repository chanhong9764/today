import React, { useState } from 'react';
import { Keyboard, Platform } from 'react-native';
import NextButton from '../../common/NextButton';
import DiaryContent from '../../components/diary/write/DiaryContent';
import * as S from './style';

function CustomDate() {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  return <S.TodayDate>{formattedDate}</S.TodayDate>;
}

function WriteDiary() {
  // 일기 내용 상태 관리
  const [content, setContent] = useState<string | undefined>('');

  // 일기 데이터 추적
  const onChangeContent = (data: string) => {
    setContent(data);
  };

  function onPressWrite(data: string) {
    setContent(data);
  }
  return (
    <S.WriteDiaryContainer
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      onStartShouldSetResponder={Keyboard.dismiss}>
      <S.WriteDiaryInner>
        <CustomDate />
        <S.WriteDiaryTitle>오늘 하루는 어땠나요?</S.WriteDiaryTitle>
        <DiaryContent value={content} onChangeText={onChangeContent} onSubmitEditing={onPressWrite} />
        <S.WriteDiaryButton>
          <NextButton content="다 음" />
        </S.WriteDiaryButton>
      </S.WriteDiaryInner>
    </S.WriteDiaryContainer>
  );
}

export default WriteDiary;
