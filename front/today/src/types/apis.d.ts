export interface Apis {
  members: string;
  image: string;
  diary: string;
  search: string;
  singleDiary: (diaryId: number) => Array;
  important: (diaryId: number) => Array;
  month: (date: string) => Array;
  day: (date: string) => Array;
}
