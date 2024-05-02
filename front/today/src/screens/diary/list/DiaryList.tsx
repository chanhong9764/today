import React, { useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Calendars } from '../../../apis/CalendarApi';
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

  function onPressSearch() {
    Calendars.Search({ keyword: filterText })
      .then(data => {})
      .catch(error => {
        console.error('실패', error);
      });
  }

  // 페이지네이션
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  // const getData=() => {
  //   if(loading){
  //     return;
  //   }
  //   setLoading(true);
  //   Diarys.getDiarys()
  //   .then(res=>res)
  //   .then(result => {
  //     setData([...data, ...result.slice(offset, offset+LIMIT)]);
  //     setOffset(offset + LIMIT);
  //   })
  //   .then(()=>setLoading(false))
  //   .catch(err => setLoading(false))
  //   };

  // useEffect(()=>{
  //   getData();
  // },[]);

  return (
    <SafeAreaView>
      <SearchBar filterText={filterText} setFilterText={setFilterText} onPress={onPressSearch} />
      <FlatList data={filteredData} renderItem={SingleDiary} keyExtractor={item => item.diaryId.toString()} />
    </SafeAreaView>
  );
}

export default DiaryList;
