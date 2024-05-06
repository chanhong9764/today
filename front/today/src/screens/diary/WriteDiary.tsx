import React, { useState } from 'react';
import { Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Diarys } from '../../apis/DiaryApi';
import NextButton from '../../common/CommonButton';
import DiaryContent from '../../components/diary/write/DiaryContent';
import { CalendarProp } from '../../types/navigatortype/stack';
import * as S from './style';

function CustomDate() {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  return <S.TodayDate>{formattedDate}</S.TodayDate>;
}

function WriteDiary({ navigation, route }: CalendarProp) {
  const { feel } = route.params;

  // 일기 내용 상태 관리
  const [content, setContent] = useState({
    feel: feel,
    content: '',
  });

  // 일기 데이터 추적
  const onChangeContent = (newContent: string) => {
    setContent(prevData => ({
      ...prevData,
      content: newContent,
    }));
  };

  // 이미지 생성 요청
  function onPressWrite() {
    const contentLength = content.content.trim().length;

    if (contentLength < 10) {
      Alert.alert('경고', '최소 10자 이상 입력해주세요.');
    } else if (contentLength > 200) {
      Alert.alert('경고', '200자를 초과할 수 없습니다.');
    } else {
      navigation.navigate('WaitImage');

      Diarys.createImage(content)
        .then(res => {
          console.log('이미지 생성 성공');
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  3;

  return (
    <KeyboardAwareScrollView>
      <S.WriteDiaryInner>
        <CustomDate />
        <S.WriteDiaryTitle>오늘 하루는 어땠나요?</S.WriteDiaryTitle>
        <DiaryContent value={content.content} onChangeText={onChangeContent} onSubmitEditing={onPressWrite} />
        <S.WriteDiaryButton>
          <NextButton content="다 음" onPress={onPressWrite} />
        </S.WriteDiaryButton>
      </S.WriteDiaryInner>
    </KeyboardAwareScrollView>
  );
}

export default WriteDiary;
