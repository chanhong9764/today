import React from 'react';
import { FlatList } from 'react-native';
import DateFilter from '../../../components/diary/list/DateFilter';
import { SingleDiary } from '../../../components/diary/list/SingleDiary';
import dummy from '../../../db/data.json';
import * as S from './style';

function OneDayDiary() {
  return (
    <S.DiaryListContainer>
      <DateFilter />
      <FlatList data={dummy.data} renderItem={SingleDiary} keyExtractor={item => item.diaryId.toString()} />
    </S.DiaryListContainer>
  );
}

export default OneDayDiary;
