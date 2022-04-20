export const humanError = (errorCode: string) => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Invalid email address';
    case 'auth/wrong-password':
      return 'Incorrect password';
    case 'auth/user-not-found':
      return 'Account does not exists';
    default:
      return errorCode;
  }
};
