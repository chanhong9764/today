import * as Notifications from 'expo-notifications';
import { Notices } from '../../apis/NoticeApi';

// 알림 보내는 함수
// 알림의 내용을 data로 넣어서 body에 넣음
export async function testNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: '테스트 알림',
      body: '알림',
    },
    trigger: null,
  });
}

export async function getToken() {
  const deviceToken = (
    await Notifications.getExpoPushTokenAsync({
      projectId: '2ad8fc63-78f5-4754-beba-58a84f424e07',
    })
  ).data;
  console.log('토큰 생성', deviceToken);
  Notices.postToken({ token: JSON.stringify(deviceToken) })
    .then(response => console.log('토큰 전송 완료'))
    .catch(error => console.log(error));
  testNotification();
}
