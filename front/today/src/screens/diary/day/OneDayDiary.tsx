import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { Calendars } from '../../../apis/CalendarApi';
import CommonButton from '../../../common/CommonButton';
import { DiaryCard } from '../../../components/diary/day/DiaryCard';
import DateFilter from '../../../components/diary/list/DateFilter';
import { CalendarData } from '../../../types/datatype';
import { DiaryProp, DiaryStackParam } from '../../../types/navigatortype/stack';
import Analysis from '../../modal/analysis/Analysis';

interface DiaryItemProp {
  item: CalendarData;
  formattedDate: string;
  setDailyDiaryData: (item: CalendarData[]) => void;
  navigate: NativeStackNavigationProp<DiaryStackParam>;
}

function DiaryItem({ item, navigate, formattedDate, setDailyDiaryData }: DiaryItemProp) {
  const [isImportant, setIsImportant] = useState(item.important);

  function navigateToDetail() {
    navigate.push('DiaryDetail', { diaryId: item.id });
  }

  return (
    <DiaryCard
      item={item}
      onPress={navigateToDetail}
      isImportant={isImportant}
      setIsImportant={setIsImportant}
      setDailyDiaryData={setDailyDiaryData}
      formattedDate={formattedDate}
    />
  );
}

function OneDayDiary({ navigation }: DiaryProp) {
  const [dailyDiaryData, setDailyDiaryData] = useState<CalendarData[]>();
  const [openAnalysis, setOpenAnalysis] = useState<boolean>(false);
  const [date, setDate] = useState(new Date());

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = year + '-' + ('00' + month.toString()).slice(-2) + '-' + ('00' + day.toString()).slice(-2);

  useEffect(() => {
    Calendars.getCalendar(formattedDate)
      .then(response => {
        console.log('하루 일기 데이터 로드 성공', response);
        setDailyDiaryData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [formattedDate]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DateFilter date={date} setDate={setDate} />
      <View style={{ alignItems: 'center', paddingBottom: 20 }}>
        <CommonButton content="오늘의 분석결과" onPress={() => setOpenAnalysis(!openAnalysis)} />
      </View>
      {dailyDiaryData && dailyDiaryData.length > 0 ? (
        <FlatList
          data={dailyDiaryData}
          renderItem={({ item }) => (
            <DiaryItem
              item={item}
              navigate={navigation}
              formattedDate={formattedDate}
              setDailyDiaryData={setDailyDiaryData}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>오늘은 일기가 없네요 ㅠㅠ</Text>
        </View>
      )}
      <Analysis modalVisible={openAnalysis} setModalVisible={setOpenAnalysis} />
    </SafeAreaView>
  );
}

export default OneDayDiary;
