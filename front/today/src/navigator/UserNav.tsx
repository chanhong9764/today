import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Text } from 'react-native';
import NotificationBadge from '../common/noti/Notification';
import KakaoLogin from '../screens/user/KakaoLogin';
import Mypage from '../screens/user/Mypage';
import { UserStackParam } from '../types/navigatortype/stack';

const UserStack = createNativeStackNavigator<UserStackParam>();

export const UserNav = () => {
  return (
    <UserStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: ({ children }) => <Text style={{ fontFamily: 'title', fontSize: 38 }}>마이페이지</Text>,
        headerRight: () => <NotificationBadge />,
      }}>
      <UserStack.Screen name="Mypage" component={Mypage} />
      <UserStack.Screen name="KakaoLogin" component={KakaoLogin} />
    </UserStack.Navigator>
  );
};
