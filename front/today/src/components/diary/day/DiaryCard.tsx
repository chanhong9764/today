// DiaryCard.tsx
import LottieView from 'lottie-react-native';
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

  function renderImage(status: number) {
    switch (status) {
      case 0:
        return (
          <S.DefaultImage>
            <S.IconContainer>
              <Icon name={starIcon} size={35} color={'pink'} onPress={onPressPatch} />
            </S.IconContainer>
            <LottieView
              source={require('../../../../assets/lotties/drawing.json')}
              autoPlay
              loop
              style={{
                width: '100%',
                height: 150,
              }}
            />
          </S.DefaultImage>
        );
      case 1:
        return (
          <S.DefaultImage>
            <S.IconContainer>
              <Icon name={starIcon} size={35} color={'pink'} onPress={onPressPatch} />
            </S.IconContainer>
            <LottieView
              source={require('../../../../assets/lotties/done.json')}
              autoPlay
              loop
              style={{
                width: '100%',
                height: 150,
              }}
            />
          </S.DefaultImage>
        );
      case 2:
        return (
          <S.DefaultImage source={{ uri: item.imgUrl }}>
            <Icon name={starIcon} size={35} color={'pink'} onPress={onPressPatch} style={{}} />
          </S.DefaultImage>
        );
      default:
        return (
          <S.DefaultImage>
            <S.IconContainer>
              <Icon name={starIcon} size={35} color={'pink'} onPress={onPressPatch} />
            </S.IconContainer>
            <LottieView
              source={require('../../../../assets/lotties/drawing.json')}
              autoPlay
              loop
              style={{
                width: '100%',
                height: 150,
              }}
            />
          </S.DefaultImage>
        );
    }
  }

  // 각 detail 페이지로 이동
  function navigateToDetail() {
    navigation.push('DiaryStack', { screen: 'DiaryDetail', params: { diaryId: item.id } });
  }

  return (
    <S.SingleDiaryContainer onPress={navigateToDetail} backgroundColor={backgroundColor}>
      {renderImage(item.status)}
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
