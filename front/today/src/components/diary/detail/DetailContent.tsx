// DetailContent.tsx
import { VStack } from 'native-base';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';

import { DiaryData } from '../../../types/datatype';

interface DetailContentProps {
  diary: DiaryData;
}

const DetailContent = ({ diary }: DetailContentProps) => {
  const { height } = useWindowDimensions();
  const contentHeight = height * 0.3; // 전체 화면의 35% 높이로 설정

  return (
    <VStack
      padding={4}
      borderColor="#FE8B8B"
      borderWidth={3}
      borderBottomColor="#FE8B8B"
      borderRadius={8}
      borderTopRadius={0}
      height={contentHeight}>
      <TextContent>{diary.content}</TextContent>
    </VStack>
  );
};

const TextContent = styled.Text`
  text-align: justify;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.3px; // 글자 간격 (원래 예제에 있던대로 추가)
`;

export default DetailContent;
