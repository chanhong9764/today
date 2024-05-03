// CalendarBody.tsx
import { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import dummy from '../../db/data.json';
import { Header, PressedDate, dayType } from '../../types/calendartype/calendar';
import * as S from './style';

const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const isSameObj = (obj1: PressedDate, obj2: PressedDate) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

const CalendarBody = ({
  month,
  year,
  date,
  today,
  moveToNextMonth,
  moveToPreviousMonth,
  moveToSpecificYearAndMonth,
}: Header) => {
  // 날짜별 이미지 URL 매핑 객체 생성
  const imageUrlByDate: { [key: string]: string } = {};
  dummy.data.forEach(data => {
    const date = new Date(data.createdAt);
    const key = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
    imageUrlByDate[key] = data.imgUrl;
  });

  const initialState = {
    prev: {
      daysList: [],
      year: 0,
      month: 0,
    },
    curr: {
      daysList: [],
      year: 0,
      month: 0,
    },
    next: {
      daysList: [],
      year: 0,
      month: 0,
    },
  };

  const [totalDays, setTotalDays] = useState<dayType>(initialState);
  const [pressedDate, setPressedDate] = useState({
    state: '',
    year: 0,
    month: 0,
    date: 0,
  });

  // 연도와 월에 따른 전달, 현재달, 다음달 일수와 정보 세팅
  const getTotalDays = (year: number, month: number) => {
    const previousMonthLastDate = new Date(year, month - 1, 0).getDate(); // 이전 달의 마지막 날짜 체크
    const previousMonthLastDay = new Date(year, month - 1, 0).getDay(); // 이전 달의 마지막 날짜의 요일
    const currentMonthLastDate = new Date(year, month, 0).getDate();
    const currentMonthLastDay = new Date(year, month, 0).getDay();

    const previousDays = [];
    for (let i = 0; i < previousMonthLastDay + 1; i++) {
      previousDays.push(previousMonthLastDate - previousMonthLastDay + i);
    }

    const currentDays = [];
    for (let i = 0; i < currentMonthLastDate; i++) {
      currentDays.push(i + 1);
    }

    const nextDays = [];
    for (let i = 0; i < 6 - currentMonthLastDay; i++) {
      nextDays.push(i + 1);
    }

    setTotalDays({
      prev: {
        daysList: previousMonthLastDay !== 6 ? previousDays : [],
        year: month === 1 ? year - 1 : year,
        month: month === 1 ? 12 : month - 1,
      },
      curr: {
        daysList: currentDays,
        year: year,
        month: month,
      },
      next: {
        daysList: nextDays,
        year: month === 12 ? year + 1 : year,
        month: month === 12 ? 1 : month + 1,
      },
    });
  };

  const handlePressDay = (pressedDate: PressedDate) => {
    setPressedDate(pressedDate);
    if (pressedDate.state === 'prev' || pressedDate.state === 'next') {
      moveToSpecificYearAndMonth(pressedDate.year, pressedDate.month);
    }
  };

  useEffect(() => {
    getTotalDays(year, month);
  }, [year, month, date]);

  return (
    <>
      <S.DayOfWeek>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <S.Box key={index}>
            <S.DayText day={day}>{day}</S.DayText>
          </S.Box>
        ))}
      </S.DayOfWeek>
      <S.TotalDays>
        {Object.keys(totalDays).map((state: string) =>
          totalDays[state].daysList.map((day: number, index: number) => {
            const dateString = `${totalDays[state].year}-${('0' + totalDays[state].month).slice(-2)}-${('0' + day).slice(-2)}`;
            const imageUrl = state === 'curr' ? imageUrlByDate[dateString] : undefined;
            const textColor = imageUrl ? '#FFFFFF' : state === 'curr' ? '#4A4A4A' : 'lightgray';
            return (
              <S.DayBoxContainer key={index}>
                {imageUrl ? (
                  <S.ImageBackgroundStyled source={{ uri: imageUrl }}>
                    <S.DateText textColor={textColor}>{day}</S.DateText>
                  </S.ImageBackgroundStyled>
                ) : (
                  <S.DateText textColor={textColor}>{day}</S.DateText>
                )}
              </S.DayBoxContainer>
            );
          }),
        )}
      </S.TotalDays>
    </>
  );
};

export default CalendarBody;

// import React, { useEffect, useState } from 'react';
// import { ImageBackground, StyleSheet, Text, View } from 'react-native';
// import { Header, PressedDate, dayType } from '../../types/calendar';

// interface CalendarBodyProps extends Header {
//   diaryData: any[];
// }

// const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// // const isSameObj = (obj1: PressedDate, obj2: PressedDate) => {
// //   return JSON.stringify(obj1) === JSON.stringify(obj2);
// // };

// const CalendarBody = ({
//   month,
//   year,
//   date,
//   today,
//   diaryData,
//   moveToNextMonth,
//   moveToPreviousMonth,
//   moveToSpecificYearAndMonth
// }: CalendarBodyProps) => {

//  //날짜별 이미지 URL 매핑 객체 생성
//   const imageUrlByDate: { [key: string]: string } = {};
//   diaryData.forEach(data => {
//     const date = new Date(data.createdAt);
//     const key = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
//     imageUrlByDate[key] = data.imgUrl;
//   });

//   const initialState = {
//     prev: {
//       daysList: [],
//       year: 0,
//       month: 0,
//     },
//     curr: {
//       daysList: [],
//       year: 0,
//       month: 0,
//     },
//     next: {
//       daysList: [],
//       year: 0,
//       month: 0,
//     },
//   };

//   const [totalDays, setTotalDays] = useState<dayType>(initialState);
//   const [pressedDate, setPressedDate] = useState({
//     state: '',
//     year: 0,
//     month: 0,
//     date: 0,
//   });

//   // 연도와 월에 따른 전달, 현재달, 다음달 일수와 정보 세팅
//   const getTotalDays = (year: number, month: number) => {
//     const previousMonthLastDate = new Date(year, month - 1, 0).getDate(); // 이전 달의 마지막 날짜 체크
//     const previousMonthLastDay = new Date(year, month - 1, 0).getDay(); // 이전 달의 마지막 날짜의 요일
//     const currentMonthLastDate = new Date(year, month, 0).getDate();
//     const currentMonthLastDay = new Date(year, month, 0).getDay();

//     const previousDays = [];
//     for (let i = 0; i < previousMonthLastDay + 1; i++) {
//       previousDays.push(previousMonthLastDate - previousMonthLastDay + i);
//     }

//     const currentDays = [];
//     for (let i = 0; i < currentMonthLastDate; i++) {
//       currentDays.push(i + 1);
//     }

//     const nextDays = [];
//     for (let i = 0; i < 6 - currentMonthLastDay; i++) {
//       nextDays.push(i + 1);
//     }

//     setTotalDays({
//       prev: {
//         daysList: previousMonthLastDay !== 6 ? previousDays : [],
//         year: month === 1 ? year - 1 : year,
//         month: month === 1 ? 12 : month - 1,
//       },
//       curr: {
//         daysList: currentDays,
//         year: year,
//         month: month,
//       },
//       next: {
//         daysList: nextDays,
//         year: month === 12 ? year + 1 : year,
//         month: month === 12 ? 1 : month + 1,
//       },
//     });
//   };

//   const handlePressDay = (pressedDate: PressedDate) => {
//     setPressedDate(pressedDate);
//     if (pressedDate.state === 'prev' || pressedDate.state === 'next') {
//       moveToSpecificYearAndMonth(pressedDate.year, pressedDate.month);
//     }
//   };

//   useEffect(() => {
//     getTotalDays(year, month);
//   }, [year, month, date]);

//   return (
//     <>
//      <S.DayOfWeek>
//      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
//        <S.Box key={index}>
//         <S.DayText day={day}>{day}</S.DayText>
//        </S.Box>
//      ))}
//      </S.DayOfWeek>
//       <S.TotalDays>
//         {Object.keys(totalDays).map((state: string) =>
//           totalDays[state].daysList.map((day: number, index: number) => {
//             const dateString = `${totalDays[state].year}-${('0' + totalDays[state].month).slice(-2)}-${('0' + day).slice(-2)}`;
//             const imageUrl = state === 'curr' ? imageUrlByDate[dateString] : undefined;
//             const textColor = imageUrl ? '#FFFFFF' : state === 'curr' ? '#4A4A4A' : 'lightgray';
//             return (
//               <S.DayBoxContainer key={index}>
//                 {imageUrl ? (
//                   <S.ImageBackgroundStyled source={{ uri: imageUrl }}>
//                     <S.DateText textColor={textColor}>{day}</S.DateText>
//                   </S.ImageBackgroundStyled>
//                 ) : (
//                   <S.DateText textColor={textColor}>{day}</S.DateText>
//                 )}
//               </S.DayBoxContainer>
//             );
//           }),
//         )}
//       </S.TotalDays>
//     </>
//   );
// };

// export default CalendarBody;
