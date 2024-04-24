// DiaryApi.tsx
import { instance, responseBody } from './api';

export interface Diary {
  memberId: number;
  diaryId: number;
  feel: number;
  imgUrl: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

const diaryRequests = {
  get: (url: string) => instance.get<Diary>(url).then(responseBody),
  post: (url: string, body: Diary) => instance.post<Diary>(url, body).then(responseBody),
  delete: (url: string) => instance.delete<Diary>(url).then(responseBody),
};

export const Books = {
  getDiarys: (): Promise<Diary[]> => diaryRequests.get('/diary'),
  getSingleDiary: (diaryId: string): Promise<Diary> => diaryRequests.get(`/diary/${diaryId}`),
  addDiary: (diary: Diary): Promise<Diary> => diaryRequests.post(`/diary`, diary),
  deleteDiary: (diaryId: string): Promise<Diary> => diaryRequests.delete(`/diary/${diaryId}`),
};
