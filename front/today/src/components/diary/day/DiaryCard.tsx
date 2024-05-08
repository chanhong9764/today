import { Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components/native';
import { Calendars } from '../../../apis/CalendarApi';
import { Diarys } from '../../../apis/DiaryApi';
import { CalendarData } from '../../../types/datatype';
import * as S from './style';

type ItemProps = {
  item: CalendarData;
  onPress: () => void;
  isImportant: boolean;
  setIsImportant: (isImportant: boolean) => void;
  formattedDate: string;
  setDailyDiaryData: (item: CalendarData[]) => void;
};

export function DiaryCard({ item, onPress, isImportant, setIsImportant, setDailyDiaryData, formattedDate }: ItemProps) {
  const theme = useTheme();
  const day: Date = new Date(item.createdAt);
  const month: number = day.getMonth() + 1;
  const date: number = day.getDate();

  const backgroundColor = item.important ? theme.colors.lightPink : 'white';

  function onPressMain() {
    Diarys.mainDiary(item.id)
      .then(response => {
        setIsImportant(!isImportant);
      })
      .catch(error => console.log('메인 일기 패치 실패', error));
    Calendars.getCalendar(formattedDate)
      .then(response => {
        console.log('하루 일기 데이터 로드 성공', response);
        setDailyDiaryData(response.data ? response.data : []);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <S.SingleDiaryContainer onPress={onPress} backgroundColor={backgroundColor}>
      {isImportant ? '' : <Icon name="star" size={50} color="gray" onPress={onPressMain} />}
      <Image source={{ uri: item.imgUrl }} style={{ height: 200, width: '100%' }} />
      <S.SingleDiaryContent>
        <S.SingleDiaryDates>
          <S.SingleDiaryDate>{month}</S.SingleDiaryDate>
          <S.SingleDiaryDate>{date}</S.SingleDiaryDate>
        </S.SingleDiaryDates>
        <Text>{item.content}</Text>
      </S.SingleDiaryContent>
    </S.SingleDiaryContainer>
  );
}
