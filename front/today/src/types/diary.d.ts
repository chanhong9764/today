export interface DiaryData {
  memberId?: number;
  diaryId?: number;
  feel: string | undefined;
  imgUrl?: string;
  content: string;
  important?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface DiaryEntries {
  data: DiaryData[];
}
