import { DiaryData } from '../types/diary';
import { SearchWord } from '../types/search';
import { apis, instance, responseBody } from './api';

const calendarRequests = {
  get: (url: string) => instance.get<DiaryData>(url).then(responseBody),
  post: (url: string, body: SearchWord) => instance.post<SearchWord>(url, body).then(responseBody),
};

export const Calendars = {
  // 한달 일기 가져오기 => date : 0000-00-00
  getCalendars: (date: string): Promise<DiaryData> => calendarRequests.get(apis.month(date)),
  // 하루 일기 가져오기 => date : 0000-00-00
  getCalendar: (date: string): Promise<DiaryData> => calendarRequests.get(apis.day(date)),
  // 검색
  Search: (search: SearchWord): Promise<SearchWord> => calendarRequests.post(apis.search, search),
};
