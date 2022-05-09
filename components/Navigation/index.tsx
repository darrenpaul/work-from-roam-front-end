import BarsIcon from 'assets/icons/Bars';
import Button, { BUTTON_VARIANTS } from 'elements/Button';
import CrossIcon from 'assets/icons/Cross';
import Heading5 from 'elements/typography/Heading5';
import NavigationLink from './NavigationLink';
import { addSignInUrlQuery } from 'utils/signInSignUp';
import { AuthUserType } from 'types/user';
import { COMPANY_NAME } from 'shared/constants';
import { doSignOutUser } from 'services/user';
import { getCopy } from 'utils/copyReader';
import { infoNotification } from 'utils/notifications';
import { NAVIGATION_ROUTES } from 'utils/navigation';
import { ROLES } from 'utils/roles';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  buttonsContainerStyle,
  containerStyle,
  linksContainerStyle,
  menuButtonStyle,
} from './styles';

const Navigation = ({ authUser }: AuthUserType) => {
  const isLoggedIn = !!authUser?.user?.uid;
  const isAdmin = authUser?.user.role === ROLES.ADMIN;
  const router = useRouter();
  const currentPath = router.asPath;
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleSignOutUser = () => {
    doSignOutUser();
    router.push('/');
    infoNotification(getCopy('signUpSignInCopy:signOutSuccess'));
  };

  const handleSignInModal = () => {
    addSignInUrlQuery(router);
  };

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const buildLinks = () => {
    const links: { href: string; text: string; protected?: boolean; admin?: boolean }[] = [];

    NAVIGATION_ROUTES.forEach((route) => {
      if (route.protected && !isLoggedIn) {
        return;
      }
      if (route.admin && !isAdmin) {
        return;
      }
      links.push(route);
    });

    return links;
  };

  return (
    <div className={containerStyle()}>
      <Heading5>{COMPANY_NAME}</Heading5>

      <div className={menuButtonStyle()} onClick={handleShowMobileMenu}>
        {showMobileMenu ? <CrossIcon /> : <BarsIcon />}
      </div>

      <div className={linksContainerStyle(showMobileMenu)}>
        {buildLinks().map((route, index) => {
          return (
            <NavigationLink
              key={index}
              href={route.href}
              text={route.text}
              currentPath={currentPath}
            />
          );
        })}

        <div className={buttonsContainerStyle()}>
          {isLoggedIn ? (
            <Button onClick={handleSignOutUser} variant={BUTTON_VARIANTS.warning}>
              Sign out
            </Button>
          ) : (
            <Button onClick={handleSignInModal}>Sign in</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
