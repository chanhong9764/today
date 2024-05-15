import { useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Calendars } from '../../../apis/CalendarApi';
import { Diarys } from '../../../apis/DiaryApi';
import CommonButton from '../../../common/CommonButton';
import { DiaryCard } from '../../../components/diary/day/DiaryCard';
import DateFilter from '../../../components/diary/list/DateFilter';
import { CalendarData } from '../../../types/datatype';
import { DiaryStackParam } from '../../../types/navigatortype/stack';
import Analysis from '../../modal/analysis/Analysis';

interface DiaryItemProp {
  item: CalendarData;
  selectedDate: string;
  setDailyDiaryData: (item: CalendarData[]) => void;
  navigate: NativeStackNavigationProp<DiaryStackParam>;
}

interface OneDayDiaryProp {
  navigation: {
    push: (arg0: string, arg1?: { screen?: string; params?: { diaryId: number } }) => void;
  };
  route: { params: { selectedDate: string } };
}

function OneDayDiary({ navigation, route }: OneDayDiaryProp) {
  const theme = useTheme();
  const { selectedDate } = route.params;
  const [dailyDiaryData, setDailyDiaryData] = useState<CalendarData[]>();
  const [openAnalysis, setOpenAnalysis] = useState<boolean>(false);
  const [isImportant, setIsImportant] = useState<number>();
  const [date, setDate] = useState(selectedDate);

  useFocusEffect(
    useCallback(() => {
      Calendars.getCalendar(date)
        .then(response => {
          console.log('하루 일기 데이터 로드 성공', response);
          setDailyDiaryData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, [date]),
  );

  useEffect(() => {
    const importantDiary = dailyDiaryData && dailyDiaryData.find(diary => diary.important === true);
    setIsImportant(importantDiary ? importantDiary.id : undefined);
  }, [dailyDiaryData]);

  function DiaryItem({ item }: { item: CalendarData }) {
    const backgroundColor = item.id === isImportant ? theme.colors.lightPink : 'white';
    const starIcon = item.id === isImportant ? 'star' : 'staro';

    // important 상태 변화
    function onPressMain() {
      Diarys.mainDiary(item.id)
        .then(response => {
          console.log('메인 일기 패치 성공');
          setIsImportant(item.id);
        })
        .catch(error => console.log('메인 일기 패치 실패', error));
    }

    return (
      <DiaryCard
        item={item}
        navigation={navigation}
        onPressPatch={onPressMain}
        backgroundColor={backgroundColor}
        starIcon={starIcon}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fcfcfc' }}>
      <DateFilter date={date} setDate={setDate} />
      <View style={{ alignItems: 'center', paddingBottom: 20 }}>
        <CommonButton content="오늘의 분석결과" onPress={() => setOpenAnalysis(!openAnalysis)} />
      </View>
      {dailyDiaryData && dailyDiaryData.length > 0 ? (
        <FlatList
          data={dailyDiaryData}
          renderItem={({ item }) => <DiaryItem item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>오늘은 일기가 없네요</Text>
          <Text>일기를 작성해 보세요!</Text>
        </View>
      )}
      <Analysis modalVisible={openAnalysis} setModalVisible={setOpenAnalysis} selectedDate={date} />
    </SafeAreaView>
  );
}

export default OneDayDiary;
