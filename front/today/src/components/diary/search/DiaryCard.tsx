import { Image } from 'react-native';
import { SearchData } from '../../../types/datatype';
import * as S from './style';

type ItemProps = {
  item: SearchData;
  onPress: () => void;
  backgroundColor: string;
};

export function DiaryCard({ item, onPress, backgroundColor }: ItemProps) {
  const day: Date = new Date(item.createdAt);
  const month: number = day.getMonth() + 1;
  const date: number = day.getDate();

  return (
    <S.SingleDiaryContainer onPress={onPress} backgroundColor={backgroundColor}>
      <Image source={{ uri: item.imgUrl }} style={{ height: 200, width: '100%' }} />
      <S.SingleDiaryContent>
        <S.SingleDiaryDates>
          <S.SingleDiaryDate>{month}</S.SingleDiaryDate>
          <S.SingleDiaryDate>{date}</S.SingleDiaryDate>
        </S.SingleDiaryDates>
        <S.SingleDiaryTextContainer>
          <S.SingleDiaryText>{item.content}</S.SingleDiaryText>
        </S.SingleDiaryTextContainer>
      </S.SingleDiaryContent>
    </S.SingleDiaryContainer>
  );
}
