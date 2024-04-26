export interface Member {
  memberId: number;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Diary {
  memberId: number;
  diaryId: number;
  feel: number;
  imgUrl: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

// interface Diary {
//   userInfo: IUserInfo | undefined;
//   login: (email: string, password: string) => void;
//   getUserInfo: () => void;
//   logout: () => void;
// }
