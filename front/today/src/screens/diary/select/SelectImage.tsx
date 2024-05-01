import { format } from 'date-fns';
import React, { useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import NextButton from '../../../common/CommonButton';
import Images from '../../../components/diary/select/ResultImage';
import dummy from '../../../db/data.json';
import { DiaryData } from '../../../types/diary';
import { DiaryProp } from '../../../types/stack';
import * as S from './style';

function SelectImage({ navigation }: DiaryProp) {
  const theme = useTheme();
  const today: string = format(new Date(), 'yyyy. MM. dd');
  const [selectedImg, setSelectedImg] = useState<number>();

  function renderImage({ item }: { item: DiaryData }) {
    const backgroundColor = item.diaryId === selectedImg ? theme.colors.middlePink : 'white';

    return <Images item={item} onPress={() => setSelectedImg(item.diaryId)} backgroundColor={backgroundColor} />;
  }

  function createDiary() {
    if (selectedImg) {
      navigation.navigate('DiaryDetail');
      // Diarys.addDiary(data)
      //   .then(res => {})
      //   .catch(err => {
      //     console.log(err);
      //   });
    } else {
      Alert.alert(
        '그림 선택', // 제목
        '오늘의 그림을 선택해주세요.', // 메시지
        [
          { text: '확인' }, // 확인 버튼
        ],
      );
    }
  }

  return (
    <S.SelectImageContainer>
      <S.TodayDate>{today}</S.TodayDate>
      <S.SelecImageTitle>마음에 드는 그림을 선택해주세요!</S.SelecImageTitle>
      <S.ImagesContainer>
        <FlatList
          data={dummy.data}
          renderItem={renderImage}
          numColumns={2}
          keyExtractor={item => item.diaryId.toString()}
        />
      </S.ImagesContainer>
      <NextButton content="일기 작성 완료하기" onPress={createDiary} />
    </S.SelectImageContainer>
  );
}

export default SelectImage;
