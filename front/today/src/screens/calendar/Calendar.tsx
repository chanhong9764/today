// Calendar.tsx
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AddButton from '../../common/AddButton';
import CalendarBody from '../../components/calendar/CalendarBody';
import CalendarHeader from '../../components/calendar/CalendarHeader';
import { CalendarProp } from '../../types/navigatortype/stack';

function Calendar({ navigation }: CalendarProp) {
  // 일기 생성 페이지로 이동
  function navigateToWrite() {
    navigation.push('SelectEmotion');
  }

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
    <View style={styles.calendarContainer}>
      <AddButton onPress={navigateToWrite} />
      <CalendarHeader
        month={month}
        year={year}
        date={date}
        today={{ month: new Date().getMonth() + 1, year: new Date().getFullYear(), date: new Date().getDate() }}
        moveToNextMonth={moveToNextMonth}
        moveToPreviousMonth={moveToPreviousMonth}
        moveToSpecificYearAndMonth={moveToSpecificYearAndMonth}
      />
      <CalendarBody
        month={month}
        year={year}
        date={date}
        today={today}
        moveToNextMonth={moveToNextMonth}
        moveToPreviousMonth={moveToPreviousMonth}
        moveToSpecificYearAndMonth={moveToSpecificYearAndMonth}
      />
    </View>
  );
}

export default Calendar;

const styles = StyleSheet.create({
  calendarContainer: {
    margin: 10,
    // backgroundColor: 'white',
  },
});

// import React, { useEffect, useState } from 'react';
// import { StyleSheet, View } from 'react-native';
// import { Calendars } from '../../apis/CalendarApi';
// import { DiaryData } from '../../types/diary';
// import { CalendarProp } from '../../types/stack';

// import AddButton from '../../common/AddButton';
// import CalendarBody from '../../components/calendar/CalendarBody';
// import CalendarHeader from '../../components/calendar/CalendarHeader';

// function Calendar({ navigation }: CalendarProp) {
//   // 일기 생성 페이지로 이동
//   function navigateToWrite() {
//     navigation.push('SelectEmotion');
//   }

//   const [month, setMonth] = useState(new Date().getMonth() + 1);
//   const [year, setYear] = useState(new Date().getFullYear());
//   const [diaryData, setDiaryData] = useState<DiaryData[]>([]);

//   // 오늘의 날짜를 계산
//   const today = {
//     year: new Date().getFullYear(),
//     month: new Date().getMonth() + 1,
//     date: new Date().getDate(),
//   };

//   // API에서 데이터를 가져오는 함수
//   const fetchDiaryData = async () => {
//     const formattedMonth = `${year}-${('0' + month).slice(-2)}`;
//     try {
//       const data = await Calendars.getCalendars(formattedMonth);
//       setDiaryData(Array.isArray(data) ? data : [data]); // 데이터 상태 업데이트
//     } catch (error) {
//       console.error('월 데이터 요청 실패', error);
//     }
//   };

//   useEffect(() => {
//     fetchDiaryData();
//   }, [month, year]);

//   const moveToNextMonth = () => {
//     if (month === 12) {
//       setYear(year + 1);
//       setMonth(1);
//     } else {
//       setMonth(month + 1);
//     }
//   };

//   const moveToPreviousMonth = () => {
//     if (month === 1) {
//       setYear(year - 1);
//       setMonth(12);
//     } else {
//       setMonth(month - 1);
//     }
//   };

//   const moveToSpecificYearAndMonth = (newYear: number, newMonth: number) => {
//     setYear(newYear);
//     setMonth(newMonth);
//   };

//   return (
//     <View style={styles.calendarContainer}>
//       <AddButton onPress={navigateToWrite} />
//       <CalendarHeader
//         month={month}
//         year={year}
//         date={today.date}
//         today={today}
//         moveToNextMonth={moveToNextMonth}
//         moveToPreviousMonth={moveToPreviousMonth}
//         moveToSpecificYearAndMonth={moveToSpecificYearAndMonth}
//       />
//       <CalendarBody
//         month={month}
//         year={year}
//         diaryData={diaryData}
//         date={today.date}
//         today={today}
//         moveToNextMonth={moveToNextMonth}
//         moveToPreviousMonth={moveToPreviousMonth}
//         moveToSpecificYearAndMonth={moveToSpecificYearAndMonth}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   calendarContainer: {
//     margin: 10,
//     // backgroundColor: 'white',
//   },
// });

// export default Calendar;
