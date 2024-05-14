import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from '../common/Logo';
import NotificationBadge from '../common/noti/Notification';
import Mypage from '../screens/user/Mypage';
import { RootProp, UserStackParam } from '../types/navigatortype/stack';

const UserStack = createNativeStackNavigator<UserStackParam>();

export const UserNav = ({ navigation }: RootProp) => {
  return (
    <UserStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: ({ children }) => <Logo />,
        headerRight: () => <NotificationBadge onPress={() => navigation.push('NotificationScreen')} />,
      }}>
      <UserStack.Screen name="Mypage" component={Mypage} />
    </UserStack.Navigator>
  );
};
