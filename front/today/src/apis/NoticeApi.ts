import { DeviceToken } from '../types/datatype';
import { APIResponse } from '../types/datatype/apis';
import { apis, instance, responseBody } from './api';

const noticeRequests = {
  get: <T>(url: string) => instance.get<APIResponse<T>>(url).then(responseBody),
  post: <T>(url: string, body: any) => instance.post<APIResponse<T>>(url, body).then(responseBody),
  patch: <T>(url: string, body?: any) => instance.patch<APIResponse<T>>(url, body).then(responseBody),
};

export const Notices = {
  // 알림 조회
  //   getNotices: (): Promise<APIResponse<CalendarData[]>> => noticeRequests.get(apis.notice),
  //   알림 확인 여부
  //   checkNotices: (): Promise<APIResponse<CalendarData[]>> => noticeRequests.patch(apis.notice),
  // 검색
  postToken: (token: DeviceToken): Promise<APIResponse<DeviceToken>> => noticeRequests.post(apis.noticeToken, token),
};
