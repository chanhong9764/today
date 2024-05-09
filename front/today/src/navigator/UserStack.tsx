import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Logo from '../common/Logo';
import NotificationBadge from '../common/noti/Notification';
import KakaoLogin from '../screens/user/KakaoLogin';
import Mypage from '../screens/user/Mypage';
import NotificationScreen from '../screens/user/notification/NotificationScreen';
import { UserProp, UserStackParam } from '../types/navigatortype/stack';

const UserStack = createNativeStackNavigator<UserStackParam>();

export const UserNav = ({ navigation }: UserProp) => {
  return (
    <UserStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: ({ children }) => <Logo />,
        headerRight: () => <NotificationBadge onPress={() => navigation.push('NotificationScreen')} />,
      }}>
      <UserStack.Screen name="Mypage" component={Mypage} />
      <UserStack.Screen name="KakaoLogin" component={KakaoLogin} />
      <UserStack.Screen name="NotificationScreen" component={NotificationScreen} />
    </UserStack.Navigator>
  );
};
