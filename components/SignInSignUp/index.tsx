import Button from 'elements/Button';
import FormLoader from 'elements/Loaders/FormLoader';
import Modal from 'containers/Modal';
import SignIn from './SignIn';
import SignUp from './SignUp';
import useShowModal from 'hooks/useModal';
import { doSignInUser, doSignUpUser } from 'services/user';
import { getCopy } from 'utils/copyReader';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const SignUpSignIn = () => {
  const { showModal, handleShowModal, handleCloseModal } = useShowModal();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const haveAccountText = getCopy('signUpSignInCopy:haveAccount');
  const needAccountText = getCopy('signUpSignInCopy:needAccount');

  const signUpUrlKey = 'signUp';
  const signInUrlKey = 'signIn';

  useEffect(() => {
    const handleHistoryChange = (url) => {
      const urlQuery = splitUrlParams(url);

      if (urlQuery) {
        if (urlQuery[signUpUrlKey]) {
          setShowSignUp(true);
          handleShowModal();
        }
        if (urlQuery[signInUrlKey]) {
          setShowSignUp(false);
          handleShowModal();
        }
      }
    };

    router.events.on('routeChangeComplete', handleHistoryChange);
    return () => router.events.off('routeChangeComplete', handleHistoryChange);
  }, []);

  const splitUrlParams = (url) => {
    const urlParams = url.split('?')[1];
    if (!urlParams) return null;
    const urlParamsArray = urlParams.split('&');

    const urlParamsObject = {};
    urlParamsArray.forEach((param) => {
      const paramArray = param.split('=');
      urlParamsObject[paramArray[0]] = paramArray[1];
    });

    return urlParamsObject;
  };

  const onModalClose = () => {
    router.replace('', undefined, { shallow: true });
    setShowSignUp(false);
    handleCloseModal();
  };

  const handleFormToggle = () => {
    setShowSignUp(!showSignUp);
  };

  const handleSignUp = async (userData) => {
    setLoading(true);
    try {
      await doSignUpUser(userData);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleSignIn = async (userData) => {
    setLoading(true);
    const { email, password } = userData;
    try {
      await doSignInUser(email, password);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <FormLoader loading={loading} />
      ) : (
        <Modal showState={showModal} handleClose={onModalClose}>
          {showSignUp ? <SignUp onSignUp={handleSignUp} /> : <SignIn onSignIn={handleSignIn} />}
          <Button onClick={handleFormToggle}>
            {showSignUp ? haveAccountText : needAccountText}
          </Button>
        </Modal>
      )}
    </div>
  );
};

export default SignUpSignIn;
