import { HOME_ROUTE, VIEW_SPOTS_ROUTE } from './routes';

export const NAVIGATION_ROUTES = [
  {
    href: HOME_ROUTE,
    text: 'Home',
  },
  {
    href: VIEW_SPOTS_ROUTE,
    text: 'View Spots',
    protected: true,
  },
  {
    href: '/add-spot',
    text: 'Add Spot',
    protected: true,
  },
  {
    href: '/about',
    text: 'About',
  },
  {
    href: '/contact',
    text: 'Contact',
  },
  {
    href: '/admin',
    text: 'Admin',
    protected: true,
    admin: true,
  },
];
