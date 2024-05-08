import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Logo from '../common/Logo';
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
        headerTitle: ({ children }) => <Logo />,
        headerRight: () => <NotificationBadge />,
      }}>
      <UserStack.Screen name="Mypage" component={Mypage} />
      <UserStack.Screen name="KakaoLogin" component={KakaoLogin} />
    </UserStack.Navigator>
  );
};
