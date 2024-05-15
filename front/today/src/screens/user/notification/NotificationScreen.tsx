import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { SectionList, Text } from 'react-native';
import { Notices } from '../../../apis/NoticeApi';
import { NoticeData } from '../../../types/datatype';
import * as S from './style';

type NotiItemProps = {
  item: NoticeData;
  onPress: () => void;
};

type GroupedNotices = {
  [date: string]: NoticeData[];
};

type SectionHeaderProps = {
  section: {
    title: string;
  };
};

interface NotiScreenProp {
  navigation: {
    push: (arg0: string, arg1: { diaryId: number }) => void;
  };
}

function NotificationItem({ item, onPress }: NotiItemProps) {
  const backgroundColor = item.confirm ? 'white' : '#dbdbdb';
  return (
    <S.NotiContainer onPress={onPress} backgroundColor={backgroundColor}>
      <Text>오늘의 {item.content} 번째 일기의 그림이 완성되었습니다!</Text>
      <Text>마음에 드는 그림을 선택해주세요</Text>
    </S.NotiContainer>
  );
}

function NotificationScreen({ navigation }: NotiScreenProp) {
  const [notiData, setNotiData] = useState<NoticeData[]>([]);

  let groupedNotices: GroupedNotices = {};

  notiData.map(notice => {
    const date: Date = new Date(notice.createdAt);
    const year: number = date.getFullYear();
    const day: number = date.getDate();
    const month: number = date.getMonth() + 1;

    const formattedDate = year + '-' + ('00' + month.toString()).slice(-2) + '-' + ('00' + day.toString()).slice(-2);

    if (!groupedNotices[formattedDate]) {
      groupedNotices[formattedDate] = [];
    }

    groupedNotices[formattedDate].push(notice);
  });

  const sections = Object.keys(groupedNotices).map(date => ({
    title: date,
    data: groupedNotices[date],
  }));

  useFocusEffect(
    useCallback(() => {
      Notices.getNotices()
        .then(response => {
          if (response.data) {
            console.log(response);
            setNotiData(response.data);
          }
        })
        .catch(error => console.log(error));
    }, []),
  );

  function renderNoti({ item }: { item: NoticeData }) {
    function onPressNoti() {
      navigation.push('SelectImage', { diaryId: item.diaryId });
      Notices.checkNotices({ noticeId: item.noticeId, confirm: true });
    }
    return (
      <>
        <NotificationItem item={item} onPress={onPressNoti} />
      </>
    );
  }

  function renderNotiHeader({ section: { title } }: SectionHeaderProps) {
    return (
      <>
        <S.NotiTitle>{title}</S.NotiTitle>
        <S.Line />
      </>
    );
  }

  return (
    <S.NoticePageContianer>
      <SectionList
        sections={sections}
        keyExtractor={item => item?.diaryId.toString()}
        renderSectionHeader={renderNotiHeader}
        renderItem={({ item }) => renderNoti({ item })}
      />
    </S.NoticePageContianer>
  );
}

export default NotificationScreen;
