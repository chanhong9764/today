import React, { useEffect, useState } from 'react';
import { Alert, FlatList, SafeAreaView } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Calendars } from '../../../apis/CalendarApi';
import { Diarys } from '../../../apis/DiaryApi';
import { DiaryCard } from '../../../components/diary/list/DiaryCard';
import SearchBar from '../../../components/diary/search/SearchBar';
import { AllDiaryData, DiaryData } from '../../../types/datatype';
import { DiaryProp } from '../../../types/navigatortype/stack';

function DiaryList({ navigation }: DiaryProp) {
  const theme = useTheme();
  // 페이지네이션
  const [data, setData] = useState<AllDiaryData>({ content: [] });
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);

  // 검색
  const [searchData, setSearchData] = useState<AllDiaryData>({ content: [] });
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  function getData() {
    if (loading) {
      return;
    }
    setLoading(true);

    Diarys.getDiarys(page, 3)
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
    if (!isSearchActive) {
      getData();
    }
  }, [isSearchActive]);

  // useFocusEffect(
  //   useCallback(() => {
  //     setData({ content: [] });
  //     setPage(0);
  //     console.log(page);
  //     getData();
  //   }, []),
  // );

  // 검색
  const [filterText, setFilterText] = useState<string>('');

  function onPressSearch() {
    setIsSearchActive(true);
    console.log(filterText);
    Calendars.Search(filterText)
      .then(response => {
        console.log(response);
        const newData = Array.isArray(response.data?.content) ? response.data?.content : [];
        if (newData.length > 0) {
          setSearchData({ content: newData });
        } else {
          setSearchData({ content: [] });
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  function renderDiary({ item }: { item: DiaryData }) {
    function onPressDiaryCard() {
      switch (item.status) {
        case 0:
          Alert.alert('그림 생성 미완료', '아직 그림을 그리는 중이에요!');
          break;
        case 1:
          navigation.push('SelectImage', { diaryId: item.id });
          break;
        case 2:
          navigation.push('DiaryDetail', { diaryId: item.id });
          break;
        default:
          Alert.alert('그림 생성 미완료', '아직 그림을 그리는 중이에요!');
      }
    }
    return <DiaryCard item={item} onPress={onPressDiaryCard} backgroundColor="white" />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fcfcfc' }}>
      <SearchBar filterText={filterText} setFilterText={setFilterText} onPress={onPressSearch} />
      <FlatList
        data={isSearchActive ? searchData.content : data.content}
        renderItem={renderDiary}
        keyExtractor={item => item?.id.toString()}
        onEndReached={getData} // 지정 스크롤 지점에 도달했을 때 실행할 함수
        onEndReachedThreshold={0.8} // 스크롤 지점 지정
      />
    </SafeAreaView>
  );
}

export default DiaryList;
