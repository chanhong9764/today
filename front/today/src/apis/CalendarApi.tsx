import { DiaryData } from '../types/diary';
import { apis, instance, responseBody } from './api';

const calendarRequests = {
  get: (url: string) => instance.get<DiaryData>(url).then(responseBody),
};

export const Calendars = {
  // 한달 일기 가져오기 => date : 0000-00-00
  getCalendars: (date: string): Promise<DiaryData> => calendarRequests.get(apis.month(date)),
  // 하루 일기 가져오기 => date : 0000-00-00
  getCalendar: (date: string): Promise<DiaryData> => calendarRequests.get(apis.day(date)),
};
