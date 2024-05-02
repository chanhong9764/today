import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import NextButton from '../../common/CommonButton';
import { Data, EmotionData } from '../../contexts/EmotionData';
import { DiaryStackParam } from '../../types/navigatortype/stack';
import * as S from './style';

type EmotionProps = {
  emotion: Data;
  onPress: () => void;
  backgroundColor: string;
  textColor?: string;
};

function Emotions({ emotion, onPress, backgroundColor }: EmotionProps) {
  return (
    <S.EmotionContainer onPress={onPress} backgroundColor={backgroundColor}>
      <S.EmotionsTitle>{emotion.name}</S.EmotionsTitle>
    </S.EmotionContainer>
  );
}

function SelectEmotion() {
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<DiaryStackParam>>();
  const [selectedFeel, setSelectedFeel] = useState<string>('');

  // 감정 선택시 색 변화
  function renderEmotion({ item }: { item: Data }) {
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
