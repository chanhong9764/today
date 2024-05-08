// DiaryDetail.tsx
import { Box } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import ViewShot from 'react-native-view-shot';
import { Diarys } from '../../apis/DiaryApi';
import SaveButton from '../../common/SaveButton';
import DetailContent from '../../components/diary/detail/DetailContent';
import DetailHeader from '../../components/diary/detail/DetailHeader';
import { DiaryData } from '../../types/datatype';
import { DiaryDetailProp } from '../../types/navigatortype/stack';

function DiaryDetail({ route }: DiaryDetailProp) {
  const [diary, setDiary] = useState<DiaryData | undefined>();
  const viewShotRef = useRef(null);
  const { diaryId } = route.params;

  useEffect(() => {
    Diarys.getSingleDiary(diaryId)
      .then(response => {
        setDiary(response.data);
        console.log(response.data);
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
    <>
      <Box flex={1} padding={5}>
        <ScrollView>
          <ViewShot ref={viewShotRef} options={{ format: 'jpg', quality: 0.9 }}>
            <DetailHeader diary={diary} />
            <DetailContent diary={diary} />
          </ViewShot>
        </ScrollView>
      </Box>
      <SaveButton viewShotRef={viewShotRef} />
    </>
  );
}

export default DiaryDetail;
