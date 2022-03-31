import { NextRouter } from 'next/router';

const SIGN_UP_URL_QUERY = 'signUp';
const SIGN_IN_URL_QUERY = 'signIn';

export const addSignUpUrlQuery = (router: NextRouter) => {
  router.replace(`?${SIGN_UP_URL_QUERY}=true`, undefined, { shallow: true });
};

export const addSignInUrlQuery = (router: NextRouter) => {
  router.replace(`?${SIGN_IN_URL_QUERY}=true`, undefined, { shallow: true });
};
