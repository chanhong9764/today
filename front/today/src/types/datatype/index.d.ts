export interface MemberData {
  memberId: number;
  nickname: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface DiaryData {
  memberId?: number;
  diaryId: number;
  feel: string | undefined;
  imgUrl?: string;
  content: string;
  important?: boolean;
  createdAt?: string | date;
  updatedAt?: string | date;
}

export interface DiaryEntries {
  data: DiaryData[];
}
