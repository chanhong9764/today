import { createContext } from 'react';

type AddDiaryType = {
  feel: string;
  imgUrl: string;
  content: string;
  important: boolean;
};

type AddDiaryContextType = {
  addDiary: AddDiaryType;
  setAddDiary: (diary: AddDiaryType) => void;
};

export const MemberContext = createContext({
  member: {
    memberId: 0,
    email: '',
    createdAt: '',
    updatedAt: '',
  },

  setMember: () => {},
});

export const AddDiaryContext = createContext<AddDiaryContextType>({
  addDiary: {
    feel: '',
    imgUrl: '',
    content: '',
    important: false,
  },

  setAddDiary: () => {},
});
