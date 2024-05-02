// CalendarHeader.tsx
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Header } from '../../types/calendartype/calendar';

const monthToString = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const CalendarHeader = ({ month, year, moveToNextMonth, moveToPreviousMonth }: Header) => {
  return (
    <View style={styles.header}>
      {/* 이전달로 이동 */}
      <Pressable onPress={moveToPreviousMonth.bind(this, month)}>
        <Ionicons name="chevron-back" size={24} color="dodgerblue" />
      </Pressable>
      {/* 현재 출력되는 연도와 달 */}
      <Text style={styles.text}>
        {monthToString[month - 1]} {year}
      </Text>
      {/* 다음달로 이동 */}
      <Pressable onPress={moveToNextMonth.bind(this, month)}>
        <Ionicons name="chevron-forward" size={24} color="dodgerblue" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 14,
  },
  text: {
    fontSize: 20,
  },
});

export default CalendarHeader;
