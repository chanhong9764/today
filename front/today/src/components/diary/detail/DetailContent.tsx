// DetailContent.tsx
import { Text, VStack } from 'native-base';
import React from 'react';

import { DiaryData } from '../../../types/datatype';

interface DetailContentProps {
  diary: DiaryData;
}

const DetailContent = ({ diary }: DetailContentProps) => {
  return (
    <VStack style={{ borderBottomWidth: 1, borderBottomColor: '#e0e0e0' }}>
      <Text style={{ textAlign: 'justify' }}>{diary.content}</Text>
    </VStack>
  );
};

export default DetailContent;
