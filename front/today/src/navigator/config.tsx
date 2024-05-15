import * as Linking from 'expo-linking';
import * as Notifications from 'expo-notifications';

export const prefix = Linking.createURL('/');

export const linking = {
  prefixes: [prefix],
  config: {
    initialRouteName: 'MainTab',
    screens: {
      MainTab: {
        initialRouteName: 'DiaryNav',
        screens: {
          DiaryNav: {
            initialRouteName: 'DiaryList',
            screens: {
              SelectImage: 'SelectImage/:diaryId',
              DiaryList: 'DiaryList',
            },
          },
        },
      },
      NotificationScreen: 'NotificationScreen',
    },
  },

  // 딥링크 url 받는 부분
  async getInitialURL() {
    // 딥링크를 이용해 앱이 오픈되었을 때
    const url = await Linking.getInitialURL();

    if (url != null) {
      return url;
    }

    const response = await Notifications.getLastNotificationResponseAsync();
    return response?.notification.request.content.data.url;
  },

  subscribe(listener: any) {
    // const dispatch = useDispatchContext();
    const onReceiveURL = ({ url }: { url: string }) => listener(url);

    const eventListenerSubscription = Linking.addEventListener('url', onReceiveURL);

    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      const diaryId = response.notification.request.content.data;

      const url = `${prefix}SelectImage/${diaryId}`;
      listener(url);
    });

    return () => {
      // 리스너 삭제
      eventListenerSubscription.remove();
      subscription.remove();
    };
  },
};
function useDispatchContext() {
  throw new Error('Function not implemented.');
}
