import { format } from 'date-fns';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
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
  const [selected, setSelected] = useState<number>();

  function renderImage({ item }: { item: DiaryData }) {
    const backgroundColor = item.diaryId === selected ? theme.colors.middlePink : 'white';

    return <Images item={item} onPress={() => setSelected(item.diaryId)} backgroundColor={backgroundColor} />;
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
      <NextButton content="일기 작성 완료하기" onPress={() => navigation.navigate('DiaryDetail')} />
    </S.SelectImageContainer>
  );
}

export default SelectImage;
