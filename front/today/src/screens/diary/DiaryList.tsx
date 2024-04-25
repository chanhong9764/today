import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import DateFilter from '../../components/diary/list/DateFilter';
import dummy from '../../db/data.json';

export interface DiaryEntry {
  diaryId: number;
  memberId: number;
  feel: string;
  imgUrl: string;
  content: string;
  important: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DiaryData {
  data: DiaryEntry[];
}

function DiaryList() {
  const { data }: DiaryData = dummy;

  const renderDiaryEntry = ({ item }: { item: DiaryEntry }) => (
    <View>
      <Image source={{ uri: item.imgUrl }} />
      <Text>{item.content}</Text>
    </View>
  );
  return (
    <View>
      <DateFilter />
      <Text>일기 리스트 입니다.</Text>
      <FlatList data={data} renderItem={renderDiaryEntry} keyExtractor={item => item.diaryId.toString()} />
    </View>
  );
}

export default DiaryList;
