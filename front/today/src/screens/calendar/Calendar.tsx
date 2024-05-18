// Calendar.tsx
import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import CalendarBody from '../../components/calendar/CalendarBody';
import CalendarHeader from '../../components/calendar/CalendarHeader';
import * as S from './style';

interface CalendarNavProp {
  navigation: {
    push: (arg0: string, arg1?: { selectedDate: string }) => void;
  };
}

function Calendar({ navigation }: CalendarNavProp) {
  const DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;
  const DAY = DATE.getDate();
  const today = { year: YEAR, month: MONTH, date: DAY };

  const [month, setMonth] = useState(MONTH);
  const [year, setYear] = useState(YEAR);
  const [date] = useState(DAY);

  const moveToNextMonth = (month: number) => {
    if (month === 12) {
      setYear(previousYear => previousYear + 1);
      setMonth(1);
    } else {
      setMonth(previouMonth => previouMonth + 1);
    }
  };

  const moveToPreviousMonth = (month: number) => {
    if (month === 1) {
      setYear(previousYear => previousYear - 1);
      setMonth(12);
    } else {
      setMonth(previousMonth => previousMonth - 1);
    }
  };

  const moveToSpecificYearAndMonth = (year: number, month: number) => {
    setYear(year);
    setMonth(month);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
      <S.CalenderContainer>
        <S.CalenderWrapper>
            <CalendarHeader
              month={month}
              year={year}
              date={date}
              today={{ month: new Date().getMonth() + 1, year: new Date().getFullYear(), date: new Date().getDate() }}
              moveToNextMonth={moveToNextMonth}
              moveToPreviousMonth={moveToPreviousMonth}
              moveToSpecificYearAndMonth={moveToSpecificYearAndMonth}
            />
            <CalendarBody month={month} year={year} date={date} navigation={navigation} />
        </S.CalenderWrapper>
      </S.CalenderContainer>
    </KeyboardAvoidingView>
  );
}

export default Calendar;
