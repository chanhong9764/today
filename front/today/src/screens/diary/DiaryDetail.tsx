// DiaryDetail.tsx
import { Box } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, ScrollView, Text, View } from 'react-native';
import ViewShot from 'react-native-view-shot';
import { Diarys } from '../../apis/DiaryApi';
import SaveButton from '../../common/SaveButton';
import DetailContent from '../../components/diary/detail/DetailContent';
import DetailHeader from '../../components/diary/detail/DetailHeader';
import { DiaryData } from '../../types/datatype';
import { DiaryDetailProp } from '../../types/navigatortype/stack';

function DiaryDetail({ navigation, route }: DiaryDetailProp) {
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

  function onPressEdit() {
    if (diary) {
      console.log(diary.content, diaryId);
      navigation.navigate('EditDiary', { diaryId: diaryId, diaryContent: diary.content });
    }
  }

  function onPressDelete() {
    if (diary) {
      Alert.alert(
        '오늘의 일기',
        '정말 삭제 하시겠습니까?',
        [
          {
            text: '취소',
            style: 'cancel',
          },
          {
            text: '삭제',
            onPress: () => {
              Diarys.deleteDiary(diaryId)
                .then(() => {
                  Alert.alert('오늘의 일기', '삭제되었습니다.');
                  navigation.goBack();
                })
                .catch(error => {
                  console.error('실패', error);
                  Alert.alert('실패', '일기 삭제를 실패하였습니다.');
                });
            },
          },
        ],
        { cancelable: false },
      );
    }
  }

  // 왜 이게 없으면 diary props가 오류가 날까
  // 왜 이게 없으면 null값으로 받아질 오류가 있다는걸까...
  if (!diary) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Box padding={5}>
        <ScrollView>
          <ViewShot ref={viewShotRef} options={{ format: 'jpg', quality: 0.9 }} style={{ backgroundColor: 'white' }}>
            <DetailHeader diary={diary} />
            <DetailContent diary={diary} />
          </ViewShot>
        </ScrollView>
      </Box>
      <SaveButton viewShotRef={viewShotRef} />
      <Button title="수 정" onPress={onPressEdit}></Button>
      <Button title="삭 제" onPress={onPressDelete}></Button>
    </View>
  );
}

export default DiaryDetail;
