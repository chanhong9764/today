// DiaryDetail.tsx
import { useRoute } from '@react-navigation/native';
import { Container } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

import { Diarys } from '../../apis/DiaryApi';
import DetailContent from '../../components/diary/detail/DetailContent';
import DetailHeader from '../../components/diary/detail/DetailHeader';
import { DiaryData } from '../../types/diary';

function DiaryDetail() {
  const [diary, setDiary] = useState<DiaryData | null>(null);
  const route = useRoute();

  useEffect(() => {
    const { diaryId } = route.params;
    Diarys.getSingleDiary(diaryId)
      .then(data => {
        setDiary(data);
      })
      .catch(error => {
        console.error('실패', error);
      });
  }, [route.params]);

  // 왜 이게 없으면 diary props가 오류가 날까
  // 왜 이게 없으면 null값으로 받아질 오류가 있다는걸까...
  if (!diary) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container>
      <DetailHeader diary={diary} />
      <DetailContent diary={diary} />
    </Container>
  );
}

export default DiaryDetail;
