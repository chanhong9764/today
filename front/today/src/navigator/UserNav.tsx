import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/user/Login';
import Mypage from '../screens/user/Mypage';

const UserStack = createNativeStackNavigator();

export const UserNav = () => {
  return (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
      <UserStack.Screen name="Mypage" component={Mypage} />
      <UserStack.Screen name="Login" component={Login} />
    </UserStack.Navigator>
  );
};
