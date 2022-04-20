import BarsIcon from 'assets/icons/Bars';
import Button, { BUTTON_VARIANTS } from 'elements/Button';
import CrossIcon from 'assets/icons/Cross';
import Heading5 from 'elements/typography/Heading5';
import Link from 'next/link';
import { addSignInUrlQuery } from 'utils/signInSignUp';
import { doSignOutUser } from 'services/user';
import { getCopy } from 'utils/copyReader';
import { infoNotification } from 'utils/notifications';
import { NAVIGATION_ROUTES } from 'utils/navigation';
import { ROLES } from 'utils/roles';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  navigationButtonsContainerStyle,
  navigationContainerStyle,
  navigationLinksContainerStyle,
  navigationLinkStyle,
  navigationMenuButtonStyleStyle,
} from './styles';

const COMPANY_NAME = 'Work.From.Roam';

const NavigationLink = ({ href, text, currentPath }) => {
  return (
    <div className={navigationLinkStyle(href, currentPath)}>
      <Link href={href}>{text}</Link>
    </div>
  );
};

const Navigation = ({ authUser }) => {
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
    const links = [];

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
    <div className={navigationContainerStyle()}>
      <Heading5>{COMPANY_NAME}</Heading5>

      <div className={navigationMenuButtonStyleStyle()} onClick={handleShowMobileMenu}>
        {showMobileMenu ? <CrossIcon /> : <BarsIcon />}
      </div>

      <div className={navigationLinksContainerStyle(showMobileMenu)}>
        {isLoggedIn &&
          buildLinks().map((route, index) => {
            return (
              <NavigationLink
                key={index}
                href={route.href}
                text={route.text}
                currentPath={currentPath}
              />
            );
          })}
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
    </div>
  );
};

export default Navigation;
