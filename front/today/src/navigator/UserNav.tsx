import { createNativeStackNavigator } from '@react-navigation/native-stack';

import KakaoLogin from '../screens/user/KakaoLogin';
import Login from '../screens/user/LoginPage';
import Mypage from '../screens/user/Mypage';
import { UserStackParam } from '../types/stack';

const UserStack = createNativeStackNavigator<UserStackParam>();

export const UserNav = () => {
  return (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
      <UserStack.Screen name="Mypage" component={Mypage} />
      <UserStack.Screen name="Login" component={Login} />
      <UserStack.Screen name="KakaoLogin" component={KakaoLogin} />
    </UserStack.Navigator>
  );
};
