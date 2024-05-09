export interface MemberData {
  id: number;
  email: string;
  nickName: string;
  createAt?: string;
  updatedAt?: string;
}

export interface DiaryData {
  id: number;
  memberId: number;
  feel: string | undefined;
  important: boolean;
  imgUrl: string;
  content: string;
  createdAt?: string | Date;
}

export interface CalendarData {
  id: number;
  memberId: number;
  important: boolean;
  imgUrl: string;
  content: string;
  createdAt?: string;
}

export interface SearchData {
  diaryId: number;
  imgUrl: string;
  createdAt: string;
  content: string;
}

export interface AllDiaryData {
  content: DiaryData[];
}

export interface WriteDiaryData {
  feel: string | undefined;
  content: string;
}

export interface EditDiaryData {
  content: string;
}

export interface SearchWord {
  keyword: string;
}

export interface DeviceToken {
  token: string;
}

export interface NoticeData {
  noticeId: number;
  diaryId: number;
  kind: string;
  content: string;
  confirm: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AnalysisData {
  i: number;
  e: number;
  s: number;
  n: number;
  t: number;
  f: number;
  p: number;
  j: number;
  angry: number;
  disgust: number;
  fear: number;
  happiness: number;
  sadness: number;
  surprise: number;
}
