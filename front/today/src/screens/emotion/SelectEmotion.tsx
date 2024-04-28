import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import { useTheme } from 'styled-components';
import NextButton from '../../common/CommonButton';
import { Data, EmotionData } from '../../contexts/EmotionData';
import { DiaryStackParam } from '../../types/stack';
import * as S from './style';

type EmotionProps = {
  emotion: Data;
  onPress: () => void;
  backgroundColor: string;
  textColor?: string;
};

function Emotion({ emotion, onPress, backgroundColor }: EmotionProps) {
  return (
    <S.EmotionContainer onPress={onPress} backgroundColor={backgroundColor}>
      <Text>{emotion.name}</Text>
    </S.EmotionContainer>
  );
}

function SelectEmotion() {
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<DiaryStackParam>>();
  const [selectedFeel, setSelectedFeel] = useState<string>();

  // 감정 선택시 색 변화
  function renderEmotion({ item }: { item: Data }) {
    const backgroundColor = item.feel === selectedFeel ? theme.colors.middlePink : '';
    const color = item.feel === selectedFeel ? 'white' : 'black';

    return (
      <Emotion
        emotion={item}
        onPress={() => setSelectedFeel(item.feel)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  }

  // 일기 작성 페이지로 화면 이동
  function navigateToWriteDiary() {
    navigation.push('WriteDiary');
  }
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>오늘의 감정을 선택해주세요.</S.Title>
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
