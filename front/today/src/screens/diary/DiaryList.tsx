import React from 'react';
import { Text, View } from 'react-native';
import DateFilter from '../../components/diary/list/DateFilter';

function DiaryList() {
  return (
    <View>
      <DateFilter />
      <Text>일기 리스트 입니다.</Text>
    </View>
  );
}

export default DiaryList;
