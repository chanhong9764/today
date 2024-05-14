import * as Linking from 'expo-linking';
import * as Notifications from 'expo-notifications';

const prefix = Linking.createURL("/");

export const linking = {
  prefixes: [prefix],
  config: {
    initialRouteName: 'MainTab',
    screens: {
      MainTab: {
        initialRouteName: "CalendarNav",
        screens: {
          Diary: {
            initialRouteName: "DiaryList",
            screens: {
              "DiaryList": "/DiaryList",
              "SelectImage": "/SelectImage/:diaryId",
            }
          }
        }
      },
      NotificationScreen: "/NotificationScreen"
    }
  }, 
  async getInitialURL() {
    const url = await Linking.getInitialURL();

    if (url != null) {
      return url;
    }

    // Handle URL from expo push notifications
    const response = await Notifications.getLastNotificationResponseAsync();

    return response?.notification.request.content.data.diaryId;
  },
  subscribe(listener: any) {
    const onReceiveURL = ({ url }: { url: string }) => listener(url);
    // Listen to incoming links from deep linking
    const eventListenerSubscription = Linking.addEventListener('url', onReceiveURL);
    
    // Listen to expo push notifications
    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      const url = response.notification.request.content.data.diaryId;
      console.log(url)
      listener(url); // 원하는 화면으로 이동합니다.
    });
    return () => {
      // Clean up the event listeners
      eventListenerSubscription.remove();
      subscription.remove();
    };
  },
}