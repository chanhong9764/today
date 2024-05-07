import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Mypage from '../screens/user/Mypage';
import { UserStackParam } from '../types/navigatortype/stack';

const UserStack = createNativeStackNavigator<UserStackParam>();

export const UserNav = () => {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="Mypage" component={Mypage} />
    </UserStack.Navigator>
  );
};
