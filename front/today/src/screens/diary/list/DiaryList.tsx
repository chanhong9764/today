import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Calendars } from '../../../apis/CalendarApi';
import { Diarys } from '../../../apis/DiaryApi';
import { DiaryCard } from '../../../components/diary/list/DiaryCard';
import SearchBar from '../../../components/diary/search/SearchBar';
import { AllDiaryData, DiaryData } from '../../../types/datatype';
import { DiaryProp } from '../../../types/navigatortype/stack';

function DiaryList({ navigation }: DiaryProp) {
  // 페이지네이션
  const [data, setData] = useState<AllDiaryData>({ content: [] });
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  function getData() {
    if (loading) {
      return;
    }
    setLoading(true);

    Diarys.getDiarys(page, 2)
      .then(response => {
        console.log(response.data);
        const newData = response.data?.content || [];
        setData(currentData => ({
          ...currentData,
          content: [...currentData.content, ...newData],
        }));
        setPage(prevPage => prevPage + 1);
      })
      .then(() => setLoading(false))
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
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

  function renderDiary({ item }: { item: DiaryData }) {
    function navigateToDetail() {
      navigation.push('DiaryDetail', { diaryId: item.id });
    }
    return <DiaryCard item={item} onPress={navigateToDetail} backgroundColor="white" />;
  }

  return (
    <SafeAreaView>
      <SearchBar filterText={filterText} setFilterText={setFilterText} onPress={onPressSearch} />
      <FlatList
        data={data.content}
        renderItem={renderDiary}
        keyExtractor={item => item?.id.toString()}
        onEndReached={getData} // 지정 스크롤 지점에 도달했을 때 실행할 함수
        onEndReachedThreshold={0.8} // 스크롤 지점 지정
      />
    </SafeAreaView>
  );
}

export default DiaryList;
