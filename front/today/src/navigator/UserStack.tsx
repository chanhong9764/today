import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from '../common/Logo';
import NotificationBadge from '../common/noti/Notification';
import Mypage from '../screens/user/Mypage';
import { UserStackParam } from '../types/navigatortype/stack';

interface UserNavProp {
  navigation: {
    push: (arg0: string) => void;
  };
}

const UserStack = createNativeStackNavigator<UserStackParam>();

export const UserNav = ({ navigation }: UserNavProp) => {
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
