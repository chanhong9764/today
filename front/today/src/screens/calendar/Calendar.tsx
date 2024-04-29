import React from 'react';
import { SafeAreaView } from 'react-native';
import AddButton from '../../common/AddButton';
import CalendarBody from '../../components/calendar/CalendarBody';

import { CalendarProp } from '../../types/stack';

function Calendar({ navigation }: CalendarProp) {
  // 일기 생성 페이지로 이동
  function navigateToWrite() {
    navigation.push('SelectEmotion');
  }

  return (
    <SafeAreaView>
      <CalendarBody />
      <AddButton onPress={navigateToWrite} />
    </SafeAreaView>
  );
}

export default Calendar;
