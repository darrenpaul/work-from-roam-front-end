import useFirebaseAuth from '../hooks/useUser';
import { createContext, useContext } from 'react';

const authUserContext = createContext({
  authUser: null,
  loading: true
});

export function AuthUserProvider({ children }: any) {
  const auth = useFirebaseAuth();

  return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}

export const useAuth = () => useContext(authUserContext);
