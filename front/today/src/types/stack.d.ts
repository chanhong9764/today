import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type DiaryStackParam = {
  DiaryList?: undefined;
  SelectEmotion?: undefined;
  SelectImage?: undefined;
  DiaryEdit?: undefined;
  WriteDiary?: {
    feel: string | undefined;
  };
  DiaryDetail?: undefined;
};

export type UserStackParam = {
  Login?: undefined;
  Mypage?: undefined;
};

export type CalendarStackParam = {
  Calendar?: undefined;
  SelectEmotion?: undefined;
  SelectImage?: undefined;
  DiaryEdit?: undefined;
  WriteDiary?: {
    feel: string | undefined;
  };
  DiaryDetail?: undefined;
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
