// DetailHeader.tsx
import { Center, Container, Divider, HStack, Image, VStack } from 'native-base';
import React from 'react';

import { DiaryData } from '../../../types/datatype';

type DetailHeaderProps = {
  diary: DiaryData;
};

const DetailHeader = ({ diary }: DetailHeaderProps) => {
  return (
    <VStack>
      <HStack divider={<Divider />}>
        <Center style={{ borderBottomWidth: 0.5 }} flex={1}>
          날짜
        </Center>
        <Center style={{ borderBottomWidth: 0.5 }} flex={3}>
          {diary.createdAt}
        </Center>
        <Center style={{ borderBottomWidth: 0.5 }} flex={1}>
          오늘의 기분
        </Center>
        <Center style={{ borderBottomWidth: 0.5 }} flex={1}>
          {diary.feel}
        </Center>
      </HStack>

      <Container>
        <Image source={{ uri: diary.imgUrl }} alt="Diary Image" />
      </Container>
    </VStack>
  );
};

export default DetailHeader;
