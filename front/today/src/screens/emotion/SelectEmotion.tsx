import React, { useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import NextButton from '../../common/CommonButton';
import { EmotionData, EmotionDataProp } from '../../contexts/EmotionData';
import { CalendarProp } from '../../types/navigatortype/stack';
import * as S from './style';

type EmotionProps = {
  emotion: EmotionDataProp;
  onPress: () => void;
  backgroundColor: string;
};

function Emotions({ emotion, onPress, backgroundColor }: EmotionProps) {
  return (
    <S.EmotionContainer onPress={onPress} backgroundColor={backgroundColor}>
      <S.EmotionsTitle>{emotion.name}</S.EmotionsTitle>
    </S.EmotionContainer>
  );
}

function SelectEmotion({ navigation }: CalendarProp) {
  const theme = useTheme();
  const [selectedFeel, setSelectedFeel] = useState<string>('');

  // 감정 선택시 색 변화
  function renderEmotion({ item }: { item: EmotionDataProp }) {
    const backgroundColor = item.feel === selectedFeel ? theme.colors.lightPink : '';

    return <Emotions emotion={item} onPress={() => setSelectedFeel(item.feel)} backgroundColor={backgroundColor} />;
  }

  // 일기 작성 페이지로 화면 이동
  function navigateToWriteDiary() {
    if (selectedFeel) {
      navigation.push('WriteDiary', { feel: selectedFeel });
    } else {
      Alert.alert(
        '감정 선택', // 제목
        '감정을 선택해주세요.', // 메시지
        [
          { text: '확인' }, // 확인 버튼
        ],
      );
    }
  }

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>오늘의 감정을</S.Title>
        <S.Title>선택해주세요.</S.Title>
        <S.SubTitle>오늘의 기분은 어땠나요?</S.SubTitle>
      </S.TitleContainer>
      <FlatList
        data={EmotionData}
        renderItem={renderEmotion}
        numColumns={2}
        keyExtractor={emotion => emotion.feel}
        extraData={selectedFeel}
      />

      <S.ButtonContainer>
        <NextButton content="다 음" onPress={navigateToWriteDiary} />
      </S.ButtonContainer>
    </S.Container>
  );
}

export default SelectEmotion;
