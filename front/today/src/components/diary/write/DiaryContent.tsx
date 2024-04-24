import React from 'react';
import * as S from './style';

interface CuntomInputProps {
  value: string | undefined;
  onChangeText: (data: string) => void;
  onSubmitEditing: (data: string) => void;
}

function DiaryContent({ value, onChangeText, onSubmitEditing }: CuntomInputProps) {
  return (
    <>
      <S.DiaryContainer
        value={value}
        multiline={true}
        numberOfLines={4}
        placeholder="오늘의 하루를 기록해보세요."
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
      <S.CountText>{value && value.length} / 200</S.CountText>
    </>
  );
}

export default DiaryContent;
