import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Calendars } from '../../../apis/CalendarApi';
import DateFilter from '../../../components/diary/list/DateFilter';
import { SingleDiary } from '../../../components/diary/list/SingleDiary';
import { CalendarData } from '../../../types/datatype';

function OneDayDiary() {
  const [dailyDiaryData, setDailyDiaryData] = useState<CalendarData[] | undefined>();
  useEffect(() => {
    Calendars.getCalendar('2024-05-06')
      .then(response => {
        console.log('하루 일기 데이터 로드 성공', response);
        setDailyDiaryData(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView>
      <DateFilter />
      <FlatList data={dailyDiaryData} renderItem={SingleDiary} keyExtractor={item => item.content} />
    </SafeAreaView>
  );
}

export default OneDayDiary;
