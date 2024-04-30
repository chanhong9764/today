// // CalendarBody.tsx
import { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import dummy from '../../db/data.json';
import { Header, PressedDate, dayType } from '../../types/calendar';

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
      <View style={styles.dayOfWeek}>
        {dayOfWeek.map((day, index) => (
          <View style={styles.box} key={index}>
            <Text style={dayOfWeekString(day).styled}>{day}</Text>
          </View>
        ))}
      </View>
      <View style={styles.totalDays}>
        {Object.keys(totalDays).map((state: string) =>
          totalDays[state].daysList.map((day: number, index: number) => {
            const dateString = `${totalDays[state].year}-${('0' + totalDays[state].month).slice(-2)}-${('0' + day).slice(-2)}`;
            const imageUrl = state === 'curr' ? imageUrlByDate[dateString] : undefined;
            // Determine the text color based on the presence of an image
            const textColor = imageUrl ? '#FFFFFF' : state === 'curr' ? '#4A4A4A' : 'lightgray';
            return (
              <View style={styles.dayBoxContainer} key={index}>
                {imageUrl ? (
                  <ImageBackground source={{ uri: imageUrl }} style={styles.imageBackground} resizeMode="cover">
                    <Text style={[styles.dateText, { color: textColor }]}>{day}</Text>
                  </ImageBackground>
                ) : (
                  <Text style={[styles.dateText, { color: textColor }]}>{day}</Text>
                )}
              </View>
            );
          }),
        )}
      </View>
    </>
  );
};

const dayOfWeekString = (day: string) =>
  StyleSheet.create({
    styled: {
      color: day === 'Sun' ? 'tomato' : day === 'Sat' ? 'royalblue' : 'gray',
    },
  });

const styles = StyleSheet.create({
  dayOfWeek: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 15,
  },
  // 날짜 요일 칸
  box: {
    width: '14.2%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalDays: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayBox: {
    width: '14.2%', // 전체 컨테이너 너비의 1/7
    height: 100, // 각 날짜 칸의 높이
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // 이미지가 박스를 넘어가지 않도록
  },
  pressable: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  dayBoxContainer: {
    width: '14.2%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  prev: {
    color: 'lightgray',
    fontWeight: '300',
    fontSize: 16,
  },
  next: {
    color: 'lightgray',
    fontWeight: '300',
    fontSize: 16,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CalendarBody;
