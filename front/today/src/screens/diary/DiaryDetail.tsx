// DiaryDetail.tsx
import { Box } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
import ViewShot from 'react-native-view-shot';
import { Diarys } from '../../apis/DiaryApi';
import SaveButton from '../../common/SaveButton';
import DetailContent from '../../components/diary/detail/DetailContent';
import DetailHeader from '../../components/diary/detail/DetailHeader';
import { DiaryData } from '../../types/datatype';

interface DiaryDetailProp {
  navigation: {
    push: (arg0: string, arg1?: { diaryId?: number; diaryContent?: string }) => void;
    goBack: () => void;
  };
  route: { params: { diaryId: number } };
}

function DiaryDetail({ navigation, route }: any) {
  const [diary, setDiary] = useState<DiaryData | undefined>();
  const viewShotRef = useRef(null);

  const { diaryId } = route.params;

  useEffect(() => {
    Diarys.getSingleDiary(diaryId)
      .then(response => {
        console.log(response.data);
        setDiary(response.data);
      })
      .catch(error => {
        console.error('실패', error);
      });
  }, [route.params]);

  function onPressEdit() {
    if (diary) {
      navigation.push('EditDiary', { diaryId: diaryId, diaryContent: diary.content });
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

  if (!diary) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}  showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <SaveButton viewShotRef={viewShotRef} />
        <View style={styles.rightIcons}>
          <Icon name="edit" size={24} color="#667085" onPress={onPressEdit} style={{ marginRight: 16 }} />
          <AntDesign name="closecircleo" size={24} color="#667085" onPress={onPressDelete} />
        </View>
      </View>
      <Box style={{ marginTop: -25, padding: 20 }}>
          <ViewShot
            ref={viewShotRef}
            options={{ format: 'jpg', quality: 0.9 }}
            style={{ backgroundColor: 'white', borderRadius: 8 }}>
            <DetailHeader diary={diary} />
            <DetailContent diary={diary} />
          </ViewShot>
      </Box>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    marginRight: 20,
  },
});
export default DiaryDetail;
