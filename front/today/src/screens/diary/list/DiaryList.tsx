import React, { useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { SingleDiary } from '../../../components/diary/list/SingleDiary';
import SearchBar from '../../../components/diary/search/SearchBar';
import dummy from '../../../db/data.json';
import { DiaryData } from '../../../types/diary';

function DiaryList() {
  // 검색
  const [filterText, setFilterText] = useState<string>('');
  const filteredData: DiaryData[] = [];
  dummy.data.forEach(data => {
    if (data.content.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    filteredData.push(data);
  });

  return (
    <SafeAreaView>
      <SearchBar filterText={filterText} setFilterText={setFilterText} />
      <FlatList data={filteredData} renderItem={SingleDiary} keyExtractor={item => item.diaryId.toString()} />
    </SafeAreaView>
  );
}

export default DiaryList;