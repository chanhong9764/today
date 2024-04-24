import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import NextButton from '../../common/NextButton';
import { Data, EmotionData } from '../../contexts/EmotionData';
import * as S from './style';

type EmotionProps = {
  emotion: Data;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

function Emotion({ emotion, onPress, backgroundColor, textColor }: EmotionProps) {
  return (
    <S.EmotionContainer onPress={onPress} backgroundColor={backgroundColor}>
      <Text>{emotion.name}</Text>
    </S.EmotionContainer>
  );
}

function SelectEmotion() {
  const [selectedFeel, setSelectedFeel] = useState<string>();

  function renderEmotion({ item }: { item: Data }) {
    const backgroundColor = item.feel === selectedFeel ? 'pink' : '';
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

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>오늘의 감정을 선택해주세요.</S.Title>
      </S.TitleContainer>
      <FlatList
        data={EmotionData}
        renderItem={renderEmotion}
        keyExtractor={emotion => emotion.feel}
        extraData={selectedFeel}
      />

      <S.ButtonContainer>
        <NextButton content="다 음" />
      </S.ButtonContainer>
    </S.Container>
  );
}

export default SelectEmotion;
