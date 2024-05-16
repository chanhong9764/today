import { Dispatch, ReactNode, createContext, useContext, useEffect, useReducer, useState } from 'react';
import { Notices } from '../apis/NoticeApi';
import { NoticeData } from '../types/datatype';

type Actions =
  | {
      type: 'CREATE';
      noticeId: number;
      diaryId: number;
      kind: string;
      content: number;
      confirm: boolean;
      createdAt: Date;
      updatedAt: Date;
    }
  | { type: 'TOGGLE'; content: number }
  | { type: 'REMOVE'; content: number };

export const NoticeContext = createContext<NoticeData[] | undefined>(undefined);
export const DispatchContext = createContext<Dispatch<Actions> | undefined>(undefined);

const Reducer = (state: NoticeData[], action: Actions): NoticeData[] => {
  switch (action.type) {
    case 'CREATE':
      // 중복 확인 로직
      const isDuplicate = state.some(
        noti =>
          noti.noticeId === action.noticeId &&
          noti.diaryId === action.diaryId &&
          noti.kind === action.kind &&
          noti.content === action.content &&
          noti.confirm === action.confirm &&
          noti.createdAt === action.createdAt &&
          noti.updatedAt === action.updatedAt,
      );

      // 중복이 있다면, 현재 상태 그대로 반환
      if (isDuplicate) {
        return state;
      }
      return state.concat({
        noticeId: action.noticeId,
        diaryId: action.diaryId,
        kind: action.kind,
        content: action.content,
        confirm: action.confirm,
        createdAt: action.createdAt,
        updatedAt: action.updatedAt,
      });

    case 'TOGGLE':
      return state.map(noti => (noti.content !== action.content ? { ...noti, confirm: true } : noti));
    case 'REMOVE':
      return state.filter(noti => noti.content !== action.content);
    default:
      throw new Error('Unhandled action');
  }
};

export function NoticeProvider({ children }: { children: ReactNode }) {
  const [initialNotice, setInitialNotice] = useState<NoticeData[]>([]);
  useEffect(() => {
    Notices.getNotices()
      .then(response => {
        setInitialNotice(initialNotice);
      })
      .catch(error => console.log(error));
  }, []);
  const [notices, dispatch] = useReducer(Reducer, initialNotice);
  return (
    <DispatchContext.Provider value={dispatch}>
      <NoticeContext.Provider value={notices}>{children}</NoticeContext.Provider>
    </DispatchContext.Provider>
  );
}

// 유효성 체크
export function useNoticeContext() {
  const state = useContext(NoticeContext);
  if (!state) throw new Error('Provider is not found');
  return state;
}

export function useDispatchContext() {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) throw new Error('Provider is not found');
  return dispatch;
}
