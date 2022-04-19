import { auth } from '../services/firebase';
import { getUser } from '../apiClient/user';
import { useEffect, useState } from 'react';

interface UserType {
  firstName: string;
  lastName: string;
  role: string;
  status: string;
  createdDate: string;
  modifiedDate: string;
  uid: string;
}

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const formatUserObject = (user: UserType, accessToken: string) => {
    return {
      user,
      accessToken,
    };
  };

  const authStateChanged = async (authState: any) => {
    setLoading(true);

    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return false;
    }

    const accessToken = authState.accessToken;
    if (accessToken) {
      try {
        const response = await getUser(accessToken);
        const user = formatUserObject(response, accessToken);
        setAuthUser(user);
      } catch (error) {
        console.log(error);
        setAuthUser(null);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged);

    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
  };
}
