import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { Notices } from '../../apis/NoticeApi';

// 알림 보내는 함수
// 알림의 내용을 data로 넣어서 body에 넣음
export async function testNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: '테스트 알림',
      body: '그림 생성이 완료되었습니다.',
    },
    trigger: null,
  });
  console.log('알림왔당');
}

// 디바이스 토큰 추출 및 전송
export async function getToken() {
  const deviceToken = (
    await Notifications.getExpoPushTokenAsync({
      projectId: '2ad8fc63-78f5-4754-beba-58a84f424e07',
    })
  ).data;
  Notices.postToken({ token: JSON.stringify(deviceToken) })
    .then(response => console.log('토큰 전송 완료', deviceToken))
    .catch(error => console.log(error));
}

// 알림 설정
export async function registerForPushNotification() {
  await Notifications.requestPermissionsAsync();
  // 유저 권한 허용 여부 확인
  const { status } = await Notifications.getPermissionsAsync();

  // 권한을 허용한 경우라면 토큰 발급 받아 전송
  if (status) {
    getToken();
    // 알림을 거부한 경우 토큰 전송X
  } else if (!status) {
    alert('알림이 거부 되었습니다.');
  } else {
    alert('알림이 지원 되지않습니다.');
  }

  // 안드로이드 채널 설정
  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: 'pink',
    });
  }

  // 알림이 오면 알림 리스트 요청
  Notifications.addNotificationReceivedListener(notification => {
    console.log('NOTIFICATION:', notification);
  });
}
