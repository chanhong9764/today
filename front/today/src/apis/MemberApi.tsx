import { MemberData } from '../types/member';
import { instance, responseBody } from './api';

const memberRequests = {
  get: (url: string) => instance.get<MemberData>(url).then(responseBody),
  post: (url: string, body: MemberData) => instance.post<MemberData>(url, body).then(responseBody),
  delete: (url: string) => instance.delete<MemberData>(url).then(responseBody),
};

export const Books = {
  // getMembers: (): Promise<Member[]> => memberRequests.get('/member'),
  getMember: (memberId: string): Promise<MemberData> => memberRequests.get(`/member/${memberId}`),
  addMember: (member: MemberData): Promise<MemberData> => memberRequests.post(`/member`, member),
  deleteMember: (memberId: string): Promise<MemberData> => memberRequests.delete(`/member/${memberId}`),
};
