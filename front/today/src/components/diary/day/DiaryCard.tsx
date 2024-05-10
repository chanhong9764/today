import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { CalendarData } from '../../../types/datatype';
import * as S from './style';

type ItemProps = {
  item: CalendarData;
  onPressDiary: () => void;
  onPressPatch: () => void;
  backgroundColor: string;
  starIcon: string;
};

export function DiaryCard({ item, onPressDiary, onPressPatch, backgroundColor, starIcon }: ItemProps) {
  const day: Date = new Date(item.createdAt);
  const month: number = day.getMonth() + 1;
  const date: number = day.getDate();

  return (
    <S.SingleDiaryContainer onPress={onPressDiary} backgroundColor={backgroundColor}>
      <S.SingleDiaryImage source={{ uri: item.imgUrl }}>
        <Icon name={starIcon} size={40} color={'pink'} onPress={onPressPatch} style={{}} />
      </S.SingleDiaryImage>
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
