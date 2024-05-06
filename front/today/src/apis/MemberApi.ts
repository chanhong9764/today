import { MemberData } from '../types/datatype';
import { APIResponse } from '../types/datatype/apis';
import { apis, instance, responseBody } from './api';

const memberRequests = {
  get: <T>(url: string) => instance.get<APIResponse<T>>(url).then(responseBody),
};

export const Members = {
  getMembers: (): Promise<APIResponse<MemberData>> => memberRequests.get(apis.members),
};
