import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Calendars } from '../../../apis/CalendarApi';
import { Diarys } from '../../../apis/DiaryApi';
import { SingleDiary } from '../../../components/diary/list/SingleDiary';
import SearchBar from '../../../components/diary/search/SearchBar';
import { DiaryData } from '../../../types/datatype';

function DiaryList() {
  // 페이지네이션
  const [data, setData] = useState<DiaryData[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  function getData() {
    if (loading) {
      return;
    }
    setLoading(true);

    Diarys.getDiarys({
      page: page,
      size: 5,
    })
      .then(result => {
        setData(data.concat(result));
        setPage(page + 1);
      })
      .then(() => setLoading(false))
      .catch(err => setLoading(false));
  }

  useEffect(() => {
    getData();
  }, []);

  // 검색
  const [filterText, setFilterText] = useState<string>('');

  function onPressSearch() {
    Calendars.Search({ keyword: filterText })
      .then(data => {
        // setData(data);
      })
      .catch(err => {
        console.error(err);
      });
  }
  return (
    <SafeAreaView>
      <SearchBar filterText={filterText} setFilterText={setFilterText} onPress={onPressSearch} />
      <FlatList
        data={data}
        renderItem={SingleDiary}
        keyExtractor={item => item.diaryId.toString()}
        onEndReached={getData} // 지정 스크롤 지점에 도달했을 때 실행할 함수
        onEndReachedThreshold={0.6} // 스크롤 지점 지정
      />
    </SafeAreaView>
  );
}

export default DiaryList;
