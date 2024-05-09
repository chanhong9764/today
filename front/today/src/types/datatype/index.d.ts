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
  createdAt?: string | date;
}

export interface SearchData {
  diaryId: number;
  imgUrl: string;
  createdAt: string;
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

export interface AllDiaryData {
  content: DiaryData[];
}

export interface ImageData {
  feel: string | undefined;
  content: string;
}
