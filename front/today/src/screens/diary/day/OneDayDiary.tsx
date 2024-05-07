import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { useTheme } from 'styled-components';
import { Calendars } from '../../../apis/CalendarApi';
import DateFilter from '../../../components/diary/list/DateFilter';
import { DiaryCard } from '../../../components/diary/list/DiaryCard';
import { CalendarData } from '../../../types/datatype';
import { DiaryProp, DiaryStackParam } from '../../../types/navigatortype/stack';

interface DiaryItemProp {
  item: CalendarData;
  navigate: NativeStackNavigationProp<DiaryStackParam>;
}

// DiaryItem 컴포넌트를 정의합니다. 이 컴포넌트는 각 일기 카드를 렌더링합니다.
function DiaryItem({ item, navigate }: DiaryItemProp) {
  const theme = useTheme();
  const [isImportant, setIsImportant] = useState(item.important);
  const backgroundColor = item.important ? theme.colors.lightPink : 'white';

  function navigateToDetail() {
    navigate.push('DiaryDetail', { diaryId: item.id });
  }

  return (
    <DiaryCard
      item={item}
      onPress={navigateToDetail}
      isImportant={isImportant}
      setIsImportant={setIsImportant}
      backgroundColor={backgroundColor}
    />
  );
}

function OneDayDiary({ navigation }: DiaryProp) {
  const [dailyDiaryData, setDailyDiaryData] = useState<CalendarData[] | undefined>();

  useEffect(() => {
    Calendars.getCalendar('2024-05-07')
      .then(response => {
        console.log('하루 일기 데이터 로드 성공', response);
        setDailyDiaryData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <SafeAreaView>
      <DateFilter />
      <FlatList
        data={dailyDiaryData}
        renderItem={({ item }) => <DiaryItem item={item} navigate={navigation} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

export default OneDayDiary;
