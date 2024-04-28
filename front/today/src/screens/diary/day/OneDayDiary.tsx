import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import DateFilter from '../../../components/diary/list/DateFilter';
import { SingleDiary } from '../../../components/diary/list/SingleDiary';
import dummy from '../../../db/data.json';

function OneDayDiary() {
  return (
    <SafeAreaView>
      <DateFilter />
      <FlatList data={dummy.data} renderItem={SingleDiary} keyExtractor={item => item.diaryId.toString()} />
    </SafeAreaView>
  );
}

export default OneDayDiary;