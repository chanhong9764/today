import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';
import Logo from '../common/Logo';
import NotificationBadge from '../common/noti/Notification';
import Calendar from '../screens/calendar/Calendar';
import DiaryDetail from '../screens/diary/DiaryDetail';
import EditDiary from '../screens/diary/EditDiary';
import WriteDiary from '../screens/diary/WriteDiary';
import OneDayDiary from '../screens/diary/day/OneDayDiary';
import SelectImage from '../screens/diary/select/SelectImage';
import WaitImage from '../screens/diary/wait/WaitImage';
import SelectEmotion from '../screens/emotion/SelectEmotion';
import { CalendarProp, CalendarStackParam } from '../types/navigatortype/stack';

const CalendarStack = createNativeStackNavigator<CalendarStackParam>();

export const CalendarNav = ({ navigation }: CalendarProp) => {
  return (
    <CalendarStack.Navigator
      initialRouteName="Calendar"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: ({ children }) => <Logo />,
        headerRight: () => <NotificationBadge />,
      }}>
      <CalendarStack.Screen
        name="Calendar"
        component={Calendar}
        options={{
          headerLeft: () => <Icon name="plus" size={35} onPress={() => navigation.push('SelectEmotion')} />,
        }}
      />
      <CalendarStack.Screen
        name="SelectEmotion"
        component={SelectEmotion}
        options={{
          headerBackTitle: '캘린더',
        }}
      />
      <CalendarStack.Screen
        name="OneDayDiary"
        component={OneDayDiary}
        options={{
          headerBackTitle: '캘린더',
        }}
      />
      <CalendarStack.Screen name="SelectImage" component={SelectImage} />
      <CalendarStack.Screen name="EditDiary" component={EditDiary} />
      <CalendarStack.Screen
        name="WriteDiary"
        component={WriteDiary}
        options={{
          headerBackTitle: '감정 선택',
        }}
      />
      <CalendarStack.Screen
        name="DiaryDetail"
        component={DiaryDetail}
        options={{
          headerBackTitle: '하루 일기',
        }}
      />
      <CalendarStack.Screen name="WaitImage" component={WaitImage} options={{ headerShown: false }} />
    </CalendarStack.Navigator>
  );
};
