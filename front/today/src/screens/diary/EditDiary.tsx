import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Diarys } from '../../apis/DiaryApi';
import CommonButton from '../../common/CommonButton';
import TodayDate from '../../common/TodayDate';
import DiaryContent from '../../components/diary/write/DiaryContent';
import { EditDiaryProp } from '../../types/navigatortype/stack';
import * as S from './style';

function EditDiary({ navigation, route }: EditDiaryProp) {
  const { diaryId, diaryContent } = route.params;

  // 일기 내용 상태 관리
  const [content, setContent] = useState({
    content: diaryContent,
  });

  // 일기 데이터 추적
  const onChangeContent = (newContent: string) => {
    setContent(prevData => ({
      ...prevData,
      content: newContent,
    }));
  };

  function onPressEdit() {
    Diarys.editDiary(diaryId, content)
      .then(res => {
        console.log('일기 수정 성공', content);
        navigation.navigate('DiaryDetail', { diaryId: diaryId });
      })
      .catch(err => {
        console.log('일기 수정 실패', err);
      });
  }

  return (
    <KeyboardAwareScrollView>
      <S.WriteDiaryInner>
        <TodayDate />
        <S.WriteDiaryTitle>오늘 하루는 어땠나요?</S.WriteDiaryTitle>
        <DiaryContent value={content.content} onChangeText={onChangeContent} onSubmitEditing={onPressEdit} />
        <S.WriteDiaryButton>
          <CommonButton content="일기 수정 완료" onPress={onPressEdit} />
        </S.WriteDiaryButton>
      </S.WriteDiaryInner>
    </KeyboardAwareScrollView>
  );
}

export default EditDiary;
