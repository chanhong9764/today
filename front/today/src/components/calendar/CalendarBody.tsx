import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Calendar } from 'react-native-calendars';

interface Styles {
  calendar: ViewStyle;
}

const CalendarBody = () => {
  // // 선택 날짜 상태 관리
  const [selected, setSelected] = useState('');
  const navigation = useNavigation();

  return (
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
        // navigation.na`vigate('DiaryList', { selectedDate: day.dateString });
      }}
      markedDates={{
        [selected]: { selected: true, selectedColor: '#ff7d7d' },
      }}
      style={{ height: '100%' }}
    />
  );
};

// StyleSheet 정의
const styles = StyleSheet.create<Styles>({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export default CalendarBody;
