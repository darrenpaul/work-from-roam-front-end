import Button, { BUTTON_VARIANTS } from 'elements/Button';
import FormLoader from 'components/shared/Loaders/FormLoader';
import Modal from 'containers/Modal';
import SignIn from './SignIn';
import SignUp from './SignUp';
import useShowModal from 'hooks/useModal';
import { doSignInUser, doSignUpUser } from 'services/user';
import { errorNotification } from 'utils/notifications';
import { getCopy } from 'utils/copyReader';
import { humanError } from 'utils/errors';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { VIEW_SPOTS_ROUTE } from 'utils/routes';
import { splitUrlParams } from 'utils/url';

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
    const { email, password } = userData;

    try {
      await doSignUpUser(userData);
      setLoading(false);
    } catch (error) {
      errorNotification(humanError(error.code));
      setLoading(false);
    }
  };

  const handleSignIn = async (userData) => {
    setLoading(true);
    const { email, password } = userData;

    try {
      await doSignInUser(email, password);
      router.push(VIEW_SPOTS_ROUTE);
      setLoading(false);
    } catch (error) {
      errorNotification(humanError(error.code));
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <FormLoader loading={loading} />
      ) : (
        <Modal showState={showModal} handleClose={onModalClose}>
          {showSignUp ? <SignUp onSignUp={handleSignUp} /> : <SignIn onSignIn={handleSignIn} />}

          <Button onClick={handleFormToggle} variant={BUTTON_VARIANTS.info}>
            {showSignUp ? haveAccountText : needAccountText}
          </Button>
        </Modal>
      )}
    </div>
  );
};

export default SignUpSignIn;
