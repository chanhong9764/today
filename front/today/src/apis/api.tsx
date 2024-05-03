import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { Axios, AxiosResponse } from 'axios';
import { Apis } from '../types/datatype/apis';

const apis: Apis = {
  login: '/login',
  members: '/members',
  search: '/search',
  // 최종 다이어리 생성
  image: '/diary/img',
  // 이미지 생성, 다이어리 list
  diary: '/diary',
  allDiarys: (page, size) => `/diary?page=${page}&size=${size}&scategory=['string']`,
  singleDiary: diaryId => `/diary/${diaryId}`,
  important: diaryId => `/diary/important/${diaryId}`,
  month: date => `/diary/calendars/${date}`,
  day: date => `/diary/calendars/day/${date}`,
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

const responseBody = (response: AxiosResponse) => response.data;

export { apis, instance, responseBody };
