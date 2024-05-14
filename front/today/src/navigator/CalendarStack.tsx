import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import IconA from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/Feather';
import { Calendars } from '../apis/CalendarApi';
import Logo from '../common/Logo';
import NotificationBadge from '../common/noti/Notification';
import SearchBar from '../components/diary/search/SearchBar';
import Calendar from '../screens/calendar/Calendar';
import DiaryDetail from '../screens/diary/DiaryDetail';
import EditDiary from '../screens/diary/EditDiary';
import SearchDiary from '../screens/diary/SearchDiary';
import WriteDiary from '../screens/diary/WriteDiary';
import OneDayDiary from '../screens/diary/day/OneDayDiary';
import SelectImage from '../screens/diary/select/SelectImage';
import WaitImage from '../screens/diary/wait/WaitImage';
import SelectEmotion from '../screens/emotion/SelectEmotion';
import NotificationScreen from '../screens/user/notification/NotificationScreen';
import { SearchData } from '../types/datatype';
import { CalendarStackParam, SearchDiaryProp } from '../types/navigatortype/stack';

const CalendarStack = createNativeStackNavigator<CalendarStackParam>();

export const CalendarNav = ({ navigation }: SearchDiaryProp) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchData, setSearchData] = useState<SearchData[]>([]);
  const [filterText, setFilterText] = useState<string>('');

  function onPressSearch() {
    console.log(filterText);
    Calendars.Search({ keyword: filterText })
      .then(response => {
        const newData = response.data || [];
        setSearchData(newData);
        navigation.navigate('SearchDiary', { searchData: newData });
        setIsSearching(false);
        setFilterText('');
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <CalendarStack.Navigator
      initialRouteName="Calendar"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: () => <Logo />,
        headerRight: () => <NotificationBadge onPress={() => navigation.push('NotificationScreen')} />,
      }}>
      <CalendarStack.Screen
        name="Calendar"
        component={Calendar}
        options={{
          headerTitle: () =>
            isSearching ? (
              <>
                <SearchBar filterText={filterText} setFilterText={setFilterText} />
                <IconF name="search" size={27} onPress={onPressSearch} />
              </>
            ) : (
              <Logo />
            ),
          headerLeft: () => <IconF name="plus" size={35} onPress={() => navigation.push('SelectEmotion')} />,
          headerRight: () =>
            isSearching ? (
              <IconA name="close" size={27} onPress={() => setIsSearching(false)} />
            ) : (
              <>
                <IconF name="search" size={27} onPress={() => setIsSearching(true)} />
                <NotificationBadge onPress={() => navigation.push('NotificationScreen')} />
              </>
            ),
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
      <CalendarStack.Screen
        name="SearchDiary"
        component={SearchDiary}
        options={{
          headerTitle: '검색 결과',
        }}
      />
      <CalendarStack.Screen name="SelectImage" component={SelectImage} />
      <CalendarStack.Screen name="EditDiary" component={EditDiary} />
      <CalendarStack.Screen name="NotificationScreen" component={NotificationScreen} />
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
