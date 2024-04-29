import React, { useState } from 'react';
import { Keyboard, Platform } from 'react-native';
import NextButton from '../../common/CommonButton';
import DiaryContent from '../../components/diary/write/DiaryContent';
import { CalendarProp } from '../../types/stack';
import * as S from './style';

function CustomDate() {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  return <S.TodayDate>{formattedDate}</S.TodayDate>;
}

function WriteDiary({ navigation }: CalendarProp) {
  // 일기 내용 상태 관리
  const [content, setContent] = useState<string | undefined>('');

  // 일기 데이터 추적
  const onChangeContent = (data: string) => {
    setContent(data);
  };

  function onPressWrite() {
    navigation.push('SelectImage');

    // Diarys.addDiary(content)
    //   .then(res => {})
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
  return (
    <S.WriteDiaryContainer
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      onStartShouldSetResponder={event => {
        Keyboard.dismiss();
        return false;
      }}>
      <S.WriteDiaryInner>
        <CustomDate />
        <S.WriteDiaryTitle>오늘 하루는 어땠나요?</S.WriteDiaryTitle>
        <DiaryContent value={content} onChangeText={onChangeContent} onSubmitEditing={onPressWrite} />
        <S.WriteDiaryButton>
          <NextButton content="다 음" onPress={onPressWrite} />
        </S.WriteDiaryButton>
      </S.WriteDiaryInner>
    </S.WriteDiaryContainer>
  );
}

export default WriteDiary;
