// DetailHeader.tsx
import { Center, Divider, HStack, Image, VStack } from 'native-base';
import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { DiaryData } from '../../../types/datatype';
import { EmotionFiles } from '../write/Emotions';

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
  const imageHeight = height * 0.33; // 전체 화면의 35% 높이로 설정

  return (
    <VStack
      borderColor="#FE8B8B"
      borderWidth={3}
      borderRadius={8}
      overflow="hidden"
      borderBottomRadius={0}
      borderBottomWidth={0}>
      <HStack
        divider={<Divider borderWidth={1} borderColor="#FE8B8B" bg="#FE8B8B" />}
        borderBottomWidth={2}
        borderBottomColor="#FE8B8B">
        <VStack flex={1}>
          <Center height="50px" style={{ borderBottomWidth: 3, borderColor: '#FE8B8B' }}>
            날짜
          </Center>
          <Center height="50px">{createdAt ? formatDate(createdAt) : 'Unknown'}</Center>
        </VStack>
        <VStack flex={1}>
          <Center height="50px" style={{ borderBottomWidth: 3, borderColor: '#FE8B8B' }}>
            오늘의 기분
          </Center>
          <Center height="50px">
            {diary.feel ? <Image source={EmotionFiles[diary.feel]} style={{ width: 40, height: 40 }} /> : 'Unknown'}
          </Center>
        </VStack>
      </HStack>
      <View style={{ height: imageHeight, width: '100%' }}>
        <Image source={{ uri: diary.imgUrl }} style={{ width: '100%', height: '100%' }} resizeMode="stretch" />
      </View>
    </VStack>
  );
};

export default DetailHeader;
