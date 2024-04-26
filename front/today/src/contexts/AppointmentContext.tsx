import { createContext } from 'react';

export const MemberContext = createContext({
  member: {
    memberId: 0,
    email: '',
    createdAt: '',
    updatedAt: '',
  },

  setMember: () => {},
});
