import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Calendar from '../screens/calendar/Calendar';
import DiaryDetail from '../screens/diary/DiaryDetail';
import DiaryEdit from '../screens/diary/DiaryEdit';
import WriteDiary from '../screens/diary/WriteDiary';
import SelectImage from '../screens/diary/select/SelectImage';
import WaitImage from '../screens/diary/wait/WaitImage';
import SelectEmotion from '../screens/emotion/SelectEmotion';

import { CalendarStackParam } from '../types/navigatortype/stack';

const CalendarStack = createNativeStackNavigator<CalendarStackParam>();

export const CalendarNav = () => {
  return (
    <CalendarStack.Navigator
      initialRouteName="Calendar"
      screenOptions={{
        headerBackTitle: 'Back',
      }}>
      <CalendarStack.Screen name="Calendar" component={Calendar} />
      <CalendarStack.Screen name="SelectEmotion" component={SelectEmotion} />
      <CalendarStack.Screen name="SelectImage" component={SelectImage} />
      <CalendarStack.Screen name="DiaryEdit" component={DiaryEdit} />
      <CalendarStack.Screen name="WriteDiary" component={WriteDiary} />
      <CalendarStack.Screen name="DiaryDetail" component={DiaryDetail} />
      <CalendarStack.Screen name="WaitImage" component={WaitImage} options={{ headerShown: false }} />
    </CalendarStack.Navigator>
  );
};
