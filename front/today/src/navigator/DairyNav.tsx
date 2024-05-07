import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DiaryDetail from '../screens/diary/DiaryDetail';
import EditDiary from '../screens/diary/EditDiary';
import WriteDiary from '../screens/diary/WriteDiary';
import DiaryList from '../screens/diary/list/DiaryList';
import SelectImage from '../screens/diary/select/SelectImage';
import SelectEmotion from '../screens/emotion/SelectEmotion';

import { DiaryStackParam } from '../types/navigatortype/stack';

const DiaryStack = createNativeStackNavigator<DiaryStackParam>();

export const DiaryNav = () => {
  return (
    <DiaryStack.Navigator
      initialRouteName="DiaryList"
      screenOptions={{
        headerBackTitle: 'Back',
      }}>
      <DiaryStack.Screen name="DiaryList" component={DiaryList} />
      <DiaryStack.Screen name="SelectEmotion" component={SelectEmotion} />
      <DiaryStack.Screen name="SelectImage" component={SelectImage} />
      <DiaryStack.Screen name="EditDiary" component={EditDiary} />
      <DiaryStack.Screen name="WriteDiary" component={WriteDiary} />
      <DiaryStack.Screen name="DiaryDetail" component={DiaryDetail} />
    </DiaryStack.Navigator>
  );
};
