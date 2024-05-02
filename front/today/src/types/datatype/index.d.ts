export interface MemberData {
  data: {
    memberId: number;
    nickName: string;
    email: string;
    createdAt?: string;
    updatedAt?: string;
  };
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
