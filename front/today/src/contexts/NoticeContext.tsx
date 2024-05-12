import { createContext } from 'react';
import { NoticeData } from '../types/datatype';

export type NotificationContextType = {
  notification: NoticeData | null;
  setNotification: (notification: NoticeData | null) => void;
};
export type NotificationProviderProp = {
  children: React.ReactNode;
};

export const NotificationContext = createContext<NotificationContextType>({
  notification: null,
  setNotification: () => {},
});
