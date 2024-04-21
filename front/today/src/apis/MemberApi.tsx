import { instance, responseBody } from './api';

export interface Member {
  memberId: number;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}

const memberRequests = {
  get: (url: string) => instance.get<Member>(url).then(responseBody),
  post: (url: string, body: Member) => instance.post<Member>(url, body).then(responseBody),
  delete: (url: string) => instance.delete<Member>(url).then(responseBody),
};

export const Books = {
  // getDiarys: (): Promise<Member[]> => memberRequests.get('/member'),
  getMember: (memberId: string): Promise<Member> => memberRequests.get(`/member/${memberId}`),
  addMember: (member: Member): Promise<Member> => memberRequests.post(`/member`, member),
  deleteMember: (memberId: string): Promise<Member> => memberRequests.delete(`/member/${memberId}`),
};
