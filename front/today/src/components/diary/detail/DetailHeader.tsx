// DetailHeader.tsx
import { Center, Container, Divider, HStack, Image, VStack } from 'native-base';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { DiaryData } from '../../../types/datatype';

type DetailHeaderProps = {
  diary: DiaryData;
};

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const dayName = dayNames[date.getDay()];
  return `${year}년 ${month}월 ${day}일 ${dayName}`;
};

const DetailHeader = ({ diary }: DetailHeaderProps) => {
  const createdAt = diary.createdAt ? new Date(diary.createdAt) : undefined;

  const { height } = useWindowDimensions();
  const imageHeight = height * 0.3; // 전체 화면의 35% 높이로 설정

  return (
    <VStack
      borderColor="#FE8B8B"
      borderWidth={1}
      borderRadius={8}
      overflow="hidden"
      borderBottomRadius={0}
      borderBottomWidth={0}>
      <HStack divider={<Divider bg="#FE8B8B" />} borderBottomWidth={1} borderBottomColor="#FE8B8B">
        <VStack flex={1}>
          <Center height="40px" style={{ borderBottomWidth: 0.5, borderColor: '#FE8B8B' }}>
            날짜
          </Center>
          <Center height="40px">{createdAt ? formatDate(createdAt) : 'Unknown'}</Center>
        </VStack>
        <VStack flex={1}>
          <Center height="40px" style={{ borderBottomWidth: 0.5, borderColor: '#FE8B8B' }}>
            오늘의 기분
          </Center>
          <Center height="40px">{diary.feel}</Center>
        </VStack>
      </HStack>

      <Container padding={0} height={imageHeight}>
        <Image source={{ uri: diary.imgUrl }} alt="Diary Image" width="full" height="full" resizeMode="cover" />
      </Container>
    </VStack>
  );
};

export default DetailHeader;
