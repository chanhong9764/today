import { createContext, useState } from 'react';
import { DiaryData } from '../types/datatype';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

interface DiaryContextProp {
  diaryList: DiaryData[];
  addDiaryList: (diarys: DiaryData[], page: number) => void;
  // removeDiaryList: (index: number) => void;
}

interface DiaryListState {
  diarys: DiaryData[];
  page: number;
}

const DiaryContext = createContext<DiaryContextProp>({
  diaryList: [],
  addDiaryList: (diarys: DiaryData[], page: number): void => {},
  // removeDiaryList: (index: number): void => {},
});

function DiaryContextProvider({ children }: Props) {
  const [diaryList, setdiaryList] = useState<DiaryListState>({
    diarys: [],
    page: 0,
  });

  const addDiaryList = (diarys: DiaryData[], page: number) => {
    const newList = [...diaryList.diarys, ...diarys];
    setdiaryList({ diarys: newList, page: page });
  };

  return (
    <DiaryContext.Provider
      value={{
        diaryList,
        addDiaryList,
      }}>
      {children}
    </DiaryContext.Provider>
  );
}

export { DiaryContext, DiaryContextProvider };
