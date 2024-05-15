import React from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import { DiaryCard } from '../../components/diary/search/DiaryCard';
import { SearchData } from '../../types/datatype';
import * as S from './style';

interface SearchDiaryProp {
  navigation: {
    push: (arg0: string, arg1?: { diaryId: number }) => void;
  };
  route: { params: { searchData: SearchData[] } };
}

function SearchDiary({ navigation, route }: SearchDiaryProp) {
  const { searchData } = route.params;

  // 다이어리 렌더 함수
  function renderDiary({ item }: { item: SearchData }) {
    return (
      <DiaryCard
        item={item}
        onPress={() => navigation.push('DiaryDetail', { diaryId: item.id })}
        backgroundColor="white"
      />
    );
  }

  // 빈배열일 경우
  function renderEmptyComponent() {
    return (
      <S.EmptyDiaryContainer>
        <Text>검색 결과가 없습니다.</Text>
      </S.EmptyDiaryContainer>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fcfcfc' }}>
      <FlatList
        data={searchData}
        extraData={searchData}
        renderItem={renderDiary}
        keyExtractor={item => item?.id.toString()}
        ListEmptyComponent={renderEmptyComponent}
      />
    </SafeAreaView>
  );
}

export default SearchDiary;
