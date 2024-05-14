import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { SearchData } from '../datatype';

export type RootStackParam = {
  LoginScreen: undefined;
  KakaoLogin: undefined;
  MainTab: undefined;
  NotificationScreen: undefined;
  Intro1: undefined;
  Intro2: undefined;
  Intro3: undefined;
  SelectImage: {
    diaryId: number;
  };
};

export type DiaryStackParam = {
  DiaryList?: undefined;
  SelectEmotion?: undefined;
  SelectImage?: {
    diaryId: number;
  };
  EditDiary?: {
    diaryId: number;
  };
  WriteDiary?: {
    feel: string;
  };
  DiaryDetail?: {
    diaryId: number;
  };
  WaitImage?: undefined;
  NotificationScreen?: undefined;
};

export type UserStackParam = {
  Mypage?: undefined;
  KakaoLogin?: undefined;
  NotificationScreen?: undefined;
  SelectImage?: {
    diaryId: number;
  };
};

export type CalendarStackParam = {
  LoginScreen?: undefined;
  KakaoLogin?: undefined;
  Calendar?: undefined;
  OneDayDiary?: {
    selectedDate: string;
  };
  SelectEmotion?: undefined;
  SelectImage?: {
    diaryId: number;
  };
  EditDiary?: {
    diaryId: number;
  };
  WaitImage?: undefined;
  WriteDiary?: {
    feel: string;
  };
  DiaryDetail?: undefined;
  SearchDiary?: {
    searchData: SearchData[];
  };
  NotificationScreen?: undefined;
};

export type RootProp = {
  navigation: NativeStackNavigationProp<RootStackParam>;
};

export type CalendarProp = {
  navigation: NativeStackNavigationProp<CalendarStackParam>;
};

export type DiaryProp = {
  navigation: NativeStackNavigationProp<DiaryStackParam>;
};

export type UserProp = {
  navigation: NativeStackNavigationProp<UserStackParam>;
};

// params
export type WriteDiaryProp = NativeStackScreenProps<CalendarStackParam, 'WriteDiary'>;
export type DiaryDetailProp = NativeStackScreenProps<CalendarStackParam, 'DiaryDetail'>;
export type EditDiaryProp = NativeStackScreenProps<CalendarStackParam, 'EditDiary'>;
export type SelectImageProp = NativeStackScreenProps<DiaryStackParam, 'SelectImage'>;
export type OneDayDiaryProp = NativeStackScreenProps<CalendarStackParam, 'OnedayDiary'>;
export type SearchDiaryProp = NativeStackScreenProps<CalendarStackParam, 'SearchDiary'>;
