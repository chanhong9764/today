// DetailContent.tsx
import { Text, VStack } from 'native-base';
import React from 'react';
import { useWindowDimensions } from 'react-native';

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
      borderWidth={1}
      borderBottomWidth={1}
      borderBottomColor="#FE8B8B"
      borderRadius={8}
      borderTopRadius={0}
      marginBottom={4}
      height={contentHeight}>
      <Text style={{ textAlign: 'justify' }}>{diary.content}</Text>
    </VStack>
  );
};

export default DetailContent;
