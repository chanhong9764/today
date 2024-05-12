import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import { Notices } from '../../../apis/NoticeApi';
import { NoticeData } from '../../../types/datatype';
import { CalendarProp } from '../../../types/navigatortype/stack';
import * as S from './style';

type NotiItemProps = {
  item: NoticeData;
  onPress: () => void;
  backgroundColor: string;
};

function NotificationItem({ item, onPress, backgroundColor }: NotiItemProps) {
  return (
    <S.NotiContainer onPress={onPress} backgroundColor={backgroundColor}>
      <Text>{item.content} 번째 일기의 그림이 완성되었습니다!</Text>
      <Text>마음에 드는 그림을 선택해주세요</Text>
    </S.NotiContainer>
  );
}

function NotificationScreen({ navigation }: CalendarProp) {
  const [notiData, setNotiData] = useState<NoticeData[]>([]);
  const [bgColors, setBgColors] = useState<string>('');

  useFocusEffect(() => {
    useCallback(() => {
      Notices.getNotices()
        .then(response => {
          if (response.data) {
            console.log(response.data);
            setNotiData(response.data);
          }
        })
        .catch(error => console.log(error));
    }, []);
  });

  function onPressNoti() {
    navigation.navigate('SelectImage');
  }

  function renderNoti({ item }: { item: NoticeData }) {
    return <NotificationItem item={item} onPress={onPressNoti} backgroundColor={bgColors} />;
  }
  return (
    <SafeAreaView>
      <Text>알림 페이지 입니다</Text>
      <FlatList data={notiData} renderItem={renderNoti} keyExtractor={item => item?.content} />
    </SafeAreaView>
  );
}

export default NotificationScreen;
