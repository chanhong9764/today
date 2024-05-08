import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { Axios, AxiosResponse } from 'axios';
import { APIResponse, Apis } from '../types/datatype/apis';

const apis: Apis = {
  // 유저 정보
  members: '/members',
  // 일기 검색
  search: '/es/search',

  // 이미지 생성
  diary: '/diary',
  // 이미지 선택 -> 최종 일기 생성
  image: '/diary/img',
  // 모든 일기 조회
  allDiarys: (page, size) => `/diary?page=${page}&size=${size}`,
  // 일기 1개 상세, 수정, 삭제
  singleDiary: diaryId => `/diary/${diaryId}`,

  // main 일기 지정
  important: diaryId => `/diary/important/${diaryId}`,
  // 한달 일기 조회
  month: date => `/calendars/${date}`,
  // 하루 일기 조회
  day: date => `/calendars/day/${date}`,

  // 한달 통계 조회
  analysisMonth: date => `/analysis/${date}`,
  // 하루 통계 조회
  analysisDay: date => `/analysis/day/${date}`,
};

const instance: Axios = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true,
});

instance.interceptors.request.use(
  async config => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    console.log(accessToken);
    config.headers['authorization'] = `Bearer ${accessToken}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

const responseBody = <T>(response: AxiosResponse<APIResponse<T>>) => response.data;

export { apis, instance, responseBody };
