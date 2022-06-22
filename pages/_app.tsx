import dynamic from 'next/dynamic';
import Loader from 'components/shared/Loaders/PageLoader';
import useFirebaseAuth from 'hooks/useUser';
import { AuthUserProvider } from 'contexts/UserContext';
import { useRouter } from 'next/router';
import 'styles/globals.css';
import type { AppProps } from 'next/app';

const SignInSignUp = dynamic(() => import('components/SignInSignUp'));

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { authUser, loading } = useFirebaseAuth();
  const router = useRouter();

  if (loading) {
    return <Loader loading={loading} />;
  }

  if (pageProps.protected) {
    if (!authUser) {
      router.push('/');
    }
  }

  return (
    <AuthUserProvider>
      <Component {...pageProps} authUser={authUser} />
      <SignInSignUp />
    </AuthUserProvider>
  );
};

export default MyApp;
