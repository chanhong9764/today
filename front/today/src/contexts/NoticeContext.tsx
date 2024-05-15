import { Dispatch, ReactNode, createContext, useReducer } from 'react';

export interface NoticeListProp {
  noticeId: number;
  diaryId: number;
  NoticeKind: string;
  content: number;
  confirm: boolean;
  createdAt: string;
  updatedAt: string;
}

type Actions =
  | {
      type: 'CREATE';
      noticeId: number;
      diaryId: number;
      NoticeKind: string;
      content: number;
      confirm: boolean;
      createdAt: string;
      updatedAt: string;
    }
  | { type: 'TOGGLE'; content: number }
  | { type: 'REMOVE'; content: number };

const NoticeContext = createContext<NoticeListProp[] | undefined>(undefined);
const DispatchContext = createContext<Dispatch<Actions> | undefined>(undefined);

const Reducer = (state: NoticeListProp[], action: Actions): NoticeListProp[] => {
  switch (action.type) {
    case 'CREATE':
      return state.concat({
        noticeId: action.noticeId,
        diaryId: action.diaryId,
        NoticeKind: action.NoticeKind,
        content: action.content,
        confirm: action.confirm,
        createdAt: action.createdAt,
        updatedAt: action.updatedAt,
      });
    case 'TOGGLE':
      return state.map(noti => (noti.content === action.content ? { ...noti, confirm: true } : noti));
    case 'REMOVE':
      return state.filter(noti => noti.content !== action.content);
    default:
      throw new Error('Unhandled action');
  }
};

export function NoticeProvider({ children }: { children: ReactNode }) {
  const [notices, dispatch] = useReducer(Reducer, []);
  return (
    <DispatchContext.Provider value={dispatch}>
      <NoticeContext.Provider value={notices}>{children}</NoticeContext.Provider>
    </DispatchContext.Provider>
  );
}
