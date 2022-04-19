export const humanError = (errorCode: string) => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Invalid email address';
      break;

    default:
      break;
  }
};
