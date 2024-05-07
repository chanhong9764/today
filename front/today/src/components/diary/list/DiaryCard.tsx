import { Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Diarys } from '../../../apis/DiaryApi';
import { CalendarData, DiaryData } from '../../../types/datatype';
import * as S from './style';

type ItemProps = {
  item: DiaryData | CalendarData;
  onPress: () => void;
  isImportant: boolean;
  setIsImportant: (isImportant: boolean) => void;
  backgroundColor: string;
};

export function DiaryCard({ item, onPress, backgroundColor, isImportant, setIsImportant }: ItemProps) {
  const day: Date = new Date(item.createdAt);
  const month: number = day.getMonth() + 1;
  const date: number = day.getDate();

  function onPressMain() {
    console.log(typeof item.id, item.id);
    Diarys.mainDiary(item.id)
      .then(response => {
        setIsImportant(!isImportant);
      })
      .catch(error => console.log('메인 일기 패치 실패', error));
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
