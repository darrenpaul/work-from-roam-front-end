import { auth } from '../services/firebase';
import { createUser } from '../apiClient/user';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { UserData } from '../types/user';

export const doSignUpUser = async (userData: UserData) => {
  const { email, password } = userData;

  const firebaseResponse = await createUserWithEmailAndPassword(auth, email, password);
  const accessToken = await firebaseResponse.user.getIdToken();
  await createUser(accessToken, userData);
};

export const doSignInUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignOutUser = () => {
  signOut(auth);
};
