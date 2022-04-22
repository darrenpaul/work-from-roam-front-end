import { auth } from '../services/firebase';
import { createUser, updateUser } from '../apiClient/user';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { UserData } from '../types/user';

export const doSignUpUser = async (userData: UserData) => {
  const { email, password } = userData;

  await createUserWithEmailAndPassword(auth, email, password).then(async (response) => {
    const accessToken = await response.user.getIdToken();
    await createUser(accessToken, userData);
    await doSignInUser(email, password);
  });
};

export const doSignInUser = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const doSignOutUser = () => {
  signOut(auth);
};

export const doUpdateUser = async (accessToken: string, userData: UserData, id: string) => {
  await updateUser(accessToken, userData, id);
};
