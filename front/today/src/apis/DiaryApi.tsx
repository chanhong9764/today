// DiaryApi.tsx
import { DiaryData } from '../types/diary';
import { instance, responseBody } from './api';

const diaryRequests = {
  get: (url: string) => instance.get<DiaryData>(url).then(responseBody),
  post: (url: string, body: DiaryData) => instance.post<DiaryData>(url, body).then(responseBody),
  delete: (url: string) => instance.delete<DiaryData>(url).then(responseBody),
};

export const Diarys = {
  getDiarys: (): Promise<DiaryData[]> => diaryRequests.get('/diary'),
  getSingleDiary: (diaryId: string): Promise<DiaryData> => diaryRequests.get(`/diary/${diaryId}`),
  addDiary: (diary: DiaryData): Promise<DiaryData> => diaryRequests.post(`/diary`, diary),
  deleteDiary: (diaryId: string): Promise<DiaryData> => diaryRequests.delete(`/diary/${diaryId}`),
};
