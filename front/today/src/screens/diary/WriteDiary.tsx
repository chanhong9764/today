import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import NextButton from '../../common/NextButton';
import DiaryContent from '../../components/diary/write/DiaryContent';
import * as S from './style';

function CustomDate() {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  return <S.TodayDate>{formattedDate}</S.TodayDate>;
}

function WriteDiary() {
  const [content, setContent] = useState<string | undefined>('');
  const onChangeContent = (data: string) => {
    setContent(data);
  };
  function onPressWrite() {
    const data = {};
  }
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.WriteDiaryInner>
          <CustomDate />
          <S.WriteDiaryTitle>오늘 하루는 어땠나요?</S.WriteDiaryTitle>
          <DiaryContent value={content} onChangeText={onChangeContent} onSubmitEditing={onPressWrite} />
          <S.WriteDiaryButton>
            <NextButton />
          </S.WriteDiaryButton>
        </S.WriteDiaryInner>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default WriteDiary;
