import Button, { BUTTON_VARIANTS } from 'elements/Button';
import Link from 'next/link';
import { addSignInUrlQuery } from 'utils/signInSignUp';
import { doSignOutUser } from 'services/user';
import { getCopy } from 'utils/copyReader';
import { infoNotification } from 'utils/notifications';
import { NAVIGATION_ROUTES } from 'utils/navigation';
import {
  navigationButtonsContainerStyle,
  navigationContainerStyle,
  navigationLinksContainerStyle,
  navigationLinkStyle
  } from './styles';
import { useRouter } from 'next/router';

const NavigationLink = ({ href, text, currentPath }) => {
  return (
    <div className={navigationLinkStyle(href, currentPath)}>
      <Link href={href}>{text}</Link>
    </div>
  );
};

const Navigation = ({ authUser }) => {
  const isLoggedIn = !!authUser?.user?.uid;
  const router = useRouter();
  const currentPath = router.asPath;

  const handleSignOutUser = () => {
    doSignOutUser();

    infoNotification(getCopy('signUpSignInCopy:signOutSuccess'));
  };

  const handleSignInModal = () => {
    addSignInUrlQuery(router);
  };

  return (
    <div className={navigationContainerStyle()}>
      <div>Company</div>

      <div className={navigationLinksContainerStyle()}>
        {isLoggedIn &&
          NAVIGATION_ROUTES.map((route, index) => {
            return (
              <NavigationLink
                key={index}
                href={route.href}
                text={route.text}
                currentPath={currentPath}
              />
            );
          })}
      </div>

      <div className={navigationButtonsContainerStyle()}>
        {isLoggedIn ? (
          <Button onClick={handleSignOutUser} variant={BUTTON_VARIANTS.warning}>
            Sign out
          </Button>
        ) : (
          <Button onClick={handleSignInModal}>Sign in</Button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
