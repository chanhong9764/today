import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParam = {
  LoginScreen: undefined;
  KakaoLogin: undefined;
  MainTab: undefined;
};

export type DiaryStackParam = {
  DiaryList?: undefined;
  SelectEmotion?: undefined;
  SelectImage?: undefined;
  EditDiary?: {
    diaryId: number;
  };
  WriteDiary?: {
    feel: string;
  };
  DiaryDetail?: {
    diaryId: number;
  };
};

export type UserStackParam = {
  Mypage?: undefined;
  KakaoLogin?: undefined;
};

export type CalendarStackParam = {
  LoginScreen?: undefined;
  KakaoLogin?: undefined;
  Calendar?: undefined;
  OneDayDiary?: undefined;
  SelectEmotion?: undefined;
  SelectImage?: undefined;
  EditDiary?: {
    diaryId: number;
  };
  WaitImage?: undefined;
  WriteDiary?: {
    feel: string;
  };
  DiaryDetail?: undefined;
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

export type WriteDiaryProp = NativeStackScreenProps<CalendarStackParam, 'WriteDiary'>;
export type DiaryDetailProp = NativeStackScreenProps<CalendarStackParam, 'DiaryDetail'>;
export type EditDiaryProp = NativeStackScreenProps<CalendarStackParam, 'EditDiary'>;
