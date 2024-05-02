// DiaryApi.tsx
import { DiaryData, ImageData } from '../types/datatype';
import { apis, instance, responseBody } from './api';

const diaryRequests = {
  get: (url: string) => instance.get<DiaryData>(url).then(responseBody),
  post: (url: string, body: DiaryData) => instance.post<DiaryData>(url, body).then(responseBody),
  imgpost: (url: string, body: ImageData) => instance.post<ImageData>(url, body).then(responseBody),
  delete: (url: string) => instance.delete<DiaryData>(url).then(responseBody),
  patch: (url: string) => instance.patch<DiaryData>(url).then(responseBody),
};

export const Diarys = {
  // 모든 일기 불러오기
  getDiarys: (page: number, size: number): Promise<DiaryData[]> => diaryRequests.get(apis.allDiarys(page, size)),
  // 일기 하나 상세페이지
  getSingleDiary: (diaryId: number): Promise<DiaryData> => diaryRequests.get(apis.singleDiary(diaryId)),
  // 일기 생성
  addDiary: (diary: DiaryData): Promise<DiaryData> => diaryRequests.post(apis.image, diary),
  // 일기 삭제
  deleteDiary: (diaryId: number): Promise<DiaryData> => diaryRequests.delete(apis.singleDiary(diaryId)),
  // 일기 수정
  editDiary: (diaryId: number): Promise<DiaryData> => diaryRequests.patch(apis.singleDiary(diaryId)),

  // 이미지 생성 요청
  getImage: (diary: ImageData): Promise<ImageData> => diaryRequests.imgpost(apis.diary, diary),
  // 메인 일기 지정
  mainDiary: (diaryId: number): Promise<DiaryData> => diaryRequests.patch(apis.important(diaryId)),
};
