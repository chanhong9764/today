import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useMemo, useState } from 'react';

const token = AsyncStorage.getItem('accessToken');

export type IsLoginProp = {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
};

export type IsLoginProviderProp = {
  children: React.ReactNode;
};

export const IsLoginContext = createContext<IsLoginProp>({
  isLogin: token !== null ? true : false,
  setIsLogin: () => {},
});

export function IsLoginProvider({ children }: IsLoginProviderProp) {
  const [isLogin, setIsLogin] = useState<boolean>(token !== null ? true : false);
  const value = useMemo(() => ({ isLogin, setIsLogin }), [isLogin, setIsLogin]);
  return <IsLoginContext.Provider value={value}>{children}</IsLoginContext.Provider>;
}

export function useIsLoginState() {
  const context = useContext(IsLoginContext);
  if (!context) {
    throw new Error('Cannot find IsLoginProvider');
  }
  return context.isLogin;
}
