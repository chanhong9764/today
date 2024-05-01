import { MemberData } from '../types/member';
import { apis, instance, responseBody } from './api';

const memberRequests = {
  get: (url: string) => instance.get<MemberData>(url).then(responseBody),
};

export const Members = {
  getMembers: (): Promise<MemberData[]> => memberRequests.get(apis.members),
  kakaoLogin: (requestCode: string): Promise<MemberData[]> =>
    memberRequests.get(`${apis.login}/kakao?code=${requestCode}`),
  naverLogin: (requestCode: string): Promise<MemberData[]> =>
    memberRequests.get(`${apis.login}/naver?code=${requestCode}`),
};
