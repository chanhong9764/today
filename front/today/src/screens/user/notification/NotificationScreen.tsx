import { useContext, useEffect, useState } from 'react';
import { SectionList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Notices } from '../../../apis/NoticeApi';
import { NoticeContext, useDispatchContext } from '../../../contexts/NoticeContext';
import { NoticeData } from '../../../types/datatype';
import * as S from './style';

type NotiItemProps = {
  item: NoticeData;
  onPress: () => void;
  dispatch: any;
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
    push: (arg0: string, arg1?: { screen: string; params?: { diaryId: number } }) => void;
  };
}

function NotificationItem({ item, onPress, dispatch }: NotiItemProps) {
  const backgroundColor = item.confirm ? '#fcfcfc' : '#dbdbdb';

  function onPressDelete() {
    dispatch({
      type: 'REMOVE',
      content: item.content,
    });
  }
  return (
    <S.NotiContainer onPress={onPress} backgroundColor={backgroundColor}>
      <S.IconContainer onPress={onPressDelete}>
        <Icon name="close" size={20} />
      </S.IconContainer>
      <Text>오늘의 {item.content} 번째 일기의 그림이 완성되었습니다!</Text>
      <Text>마음에 드는 그림을 선택해주세요</Text>
    </S.NotiContainer>
  );
}

function NotificationScreen({ navigation }: NotiScreenProp) {
  const [notiData, setNotiData] = useState<NoticeData[]>([]);
  const dispatch = useDispatchContext();
  const notices = useContext(NoticeContext);

  useEffect(() => {
    setNotiData(notices ?? []);
  }, [notices]);

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

  function renderNoti({ item }: { item: NoticeData }) {
    function onPressNoti() {
      navigation.push('DiaryStack', { screen: 'SelectImage', params: { diaryId: item.diaryId } });
      Notices.checkNotices({ noticeId: item.noticeId, confirm: true });
      dispatch({
        type: 'TOGGLE',
        content: item.content,
      });
    }
    return (
      <>
        <NotificationItem item={item} onPress={onPressNoti} dispatch={dispatch} />
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
        ListEmptyComponent={() => <Text style={{ textAlign: 'center', marginTop: 20 }}>아직 알림이 없어요!</Text>}
      />
    </S.NoticePageContianer>
  );
}

export default NotificationScreen;
