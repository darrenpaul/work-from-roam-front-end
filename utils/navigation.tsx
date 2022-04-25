import { HOME_ROUTE, VIEW_SPOTS_ROUTE } from './routes';

export const NAVIGATION_ROUTES = [
  {
    href: HOME_ROUTE,
    text: 'Home',
  },
  {
    href: VIEW_SPOTS_ROUTE,
    text: 'View Spots',
  },
  {
    href: '/add-spot',
    text: 'Add Spot',
    protected: true,
  },
  {
    href: '/account',
    text: 'Account',
    protected: true,
  },
  {
    href: '/admin',
    text: 'Admin',
    protected: true,
    admin: true,
  },
];
