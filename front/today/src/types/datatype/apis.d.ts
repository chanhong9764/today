export interface Apis {
  login: string;
  members: string;
  search: string;
  image: string;
  diary: string;
  allDiarys: (page: number, size: number) => Array;
  singleDiary: (diaryId: number) => Array;
  important: (diaryId: number) => Array;
  month: (date: string) => Array;
  day: (date: string) => Array;
}
