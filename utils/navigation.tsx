export const NAVIGATION_ROUTES = [
  {
    href: '/',
    text: 'Home'
  },
  {
    href: '/view-spots',
    text: 'View Spots',
    protected: true
  },
  {
    href: '/add-spot',
    text: 'Add Spot',
    protected: true
  },
  {
    href: '/about',
    text: 'About'
  },
  {
    href: '/contact',
    text: 'Contact'
  },
  {
    href: '/admin',
    text: 'Admin',
    protected: true,
    admin: true
  }
];
