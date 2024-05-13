// DiaryCard.tsx
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
  const date: number = day.getDate();
  const weekday = day.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });

  return (
    <S.SingleDiaryContainer onPress={onPressDiary} backgroundColor={backgroundColor}>
      <S.SingleDiaryImage source={{ uri: item.imgUrl }}>
        <Icon name={starIcon} size={35} color={'pink'} onPress={onPressPatch} style={{}} />
      </S.SingleDiaryImage>
      <S.SingleDiaryContent>
        <S.SingleDiaryDates>
          <S.SingleDiaryDate>{date}</S.SingleDiaryDate>
          <S.SingleDiaryDate>{weekday}</S.SingleDiaryDate>
        </S.SingleDiaryDates>
        <Text numberOfLines={2} ellipsizeMode="tail" style={{ flex: 1 }}>
          {item.content}
        </Text>
      </S.SingleDiaryContent>
    </S.SingleDiaryContainer>
  );
}
