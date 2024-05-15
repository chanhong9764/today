// DiaryCard.tsx
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { CalendarData } from '../../../types/datatype';
import * as S from './style';

type ItemProps = {
  item: CalendarData;
  onPressPatch: () => void;
  backgroundColor: string;
  starIcon: string;
  navigation: {
    push: (arg0: string, arg1?: { screen?: string; params?: { diaryId: number } }) => void;
  };
};

export function DiaryCard({ item, onPressPatch, backgroundColor, starIcon, navigation }: ItemProps) {
  const day: Date = new Date(item.createdAt);
  const date: number = day.getDate();
  const weekday = day.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });

  // 각 detail 페이지로 이동
  function navigateToDetail() {
    navigation.push('DiaryStack', { screen: 'DiaryDetail', params: { diaryId: item.id } });
  }

  return (
    <S.SingleDiaryContainer onPress={navigateToDetail} backgroundColor={backgroundColor}>
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
