// CalendarHeader.tsx
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Header } from '../../types/calendartype/calendar';
import * as S from './style';

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
  const theme = useTheme();
  return (
    <S.CalendarHeaderContainer>
      {/* 이전달로 이동 */}
      <Pressable onPress={moveToPreviousMonth.bind(this, month)}>
        <Ionicons name="chevron-back" size={26} color={theme.colors.mainPink} />
      </Pressable>
      {/* 현재 출력되는 연도와 달 */}
      <S.CalendarTitle>
        {monthToString[month - 1]} {year}
      </S.CalendarTitle>
      {/* 다음달로 이동 */}
      <Pressable onPress={moveToNextMonth.bind(this, month)}>
        <Ionicons name="chevron-forward" size={26} color={theme.colors.mainPink} />
      </Pressable>
    </S.CalendarHeaderContainer>
  );
};

export default CalendarHeader;
