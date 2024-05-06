import { DiaryData, ImageData } from '../types/datatype';
import { APIResponse } from '../types/datatype/apis';
import { apis, instance, responseBody } from './api';

const diaryRequests = {
  get: <T>(url: string) => instance.get<APIResponse<T>>(url).then(responseBody),
  post: <T>(url: string, body: any) => instance.post<APIResponse<T>>(url, body).then(responseBody),
  delete: <T>(url: string) => instance.delete<APIResponse<T>>(url).then(responseBody),
  patch: <T>(url: string, body?: any) => instance.patch<APIResponse<T>>(url, body).then(responseBody),
};

export const Diarys = {
  // 모든 일기 불러오기
  getDiarys: (page: number, size: number): Promise<APIResponse<DiaryData[]>> =>
    diaryRequests.get<DiaryData[]>(apis.allDiarys(page, size)),
  // 일기 하나 상세페이지
  getSingleDiary: (diaryId: number): Promise<APIResponse<DiaryData>> =>
    diaryRequests.get<DiaryData>(apis.singleDiary(diaryId)),
  // 일기 생성
  addDiary: (diary: DiaryData): Promise<APIResponse<DiaryData>> => diaryRequests.post<DiaryData>(apis.image, diary),
  // 일기 삭제
  deleteDiary: (diaryId: number): Promise<APIResponse<DiaryData>> =>
    diaryRequests.delete<DiaryData>(apis.singleDiary(diaryId)),
  // 일기 수정
  editDiary: (diaryId: number, diary: DiaryData): Promise<APIResponse<DiaryData>> =>
    diaryRequests.patch<DiaryData>(apis.singleDiary(diaryId), diary),

  // 이미지 생성 요청
  createImage: (diary: ImageData): Promise<APIResponse<ImageData>> => diaryRequests.post<ImageData>(apis.diary, diary),
  // 메인 일기 지정
  mainDiary: (diaryId: number): Promise<APIResponse<DiaryData>> =>
    diaryRequests.patch<DiaryData>(apis.important(diaryId)),
};
