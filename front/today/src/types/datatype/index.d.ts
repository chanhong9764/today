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
  createdAt?: string | date;
}

export interface CalendarData {
  id: number;
  memberId: number;
  important: boolean;
  imgUrl: string;
  content: string;
  createdAt?: string | date;
}

export interface ImageData {
  feel: string | undefined;
  content: string;
}

export interface DiaryEntries {
  data: DiaryData[];
}

export interface MemberEntries {
  data: MemberData[];
}
