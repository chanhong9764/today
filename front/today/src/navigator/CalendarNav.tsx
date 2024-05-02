import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Calendar from '../screens/calendar/Calendar';
import DiaryDetail from '../screens/diary/DiaryDetail';
import DiaryEdit from '../screens/diary/DiaryEdit';
import WriteDiary from '../screens/diary/WriteDiary';
import SelectImage from '../screens/diary/select/SelectImage';
import SelectEmotion from '../screens/emotion/SelectEmotion';

import { CalendarStackParam } from '../types/navigatortype/stack';

const DiaryStack = createNativeStackNavigator<CalendarStackParam>();

export const CalendarNav = () => {
  return (
    <DiaryStack.Navigator
      initialRouteName="Calendar"
      screenOptions={{
        headerBackTitle: 'Back',
      }}>
      <DiaryStack.Screen name="Calendar" component={Calendar} />
      <DiaryStack.Screen name="SelectEmotion" component={SelectEmotion} />
      <DiaryStack.Screen name="SelectImage" component={SelectImage} />
      <DiaryStack.Screen name="DiaryEdit" component={DiaryEdit} />
      <DiaryStack.Screen name="WriteDiary" component={WriteDiary} />
      <DiaryStack.Screen name="DiaryDetail" component={DiaryDetail} />
    </DiaryStack.Navigator>
  );
};
