const HEIGHT = 'h-14';

export const navigationContainerStyle = () => {
  const base = [
    'flex',
    'items-center',
    'justify-between',
    'w-screen',
    HEIGHT,
    'fixed',
    'top-0',
    'left-0',
    'bg-navigation',
    'text-dark-copy',
    'z-50',
    'px-8',
    'md:px-36',
    'drop-shadow-lg'
  ];

  return base.join(' ');
};

export const navigationMenuButtonStyleStyle = () => {
  const base = ['md:hidden sm:flex', 'z-[99]'];

  return base.join(' ');
};

export const navigationLinksContainerStyle = (showMenu) => {
  const showMobileMenu = showMenu ? 'flex' : 'hidden md:flex';
  const base = [
    showMobileMenu,
    'fixed md:relative',
    'w-screen h-screen md:w-fit md:h-full',
    'bg-navigation md:bg-transparent',
    'top-0 left-0',
    'flex-col md:flex-row',
    'md:justify-end md:items-center',
    'grow',
    'pt-14 md:pt-0',
    'md:ml-28',
    'z-50'
  ];
  return base.join(' ');
};

export const navigationButtonsContainerStyle = () => {
  const base = ['flex', 'ml-0 md:ml-8'];
  return base.join(' ');
};

export const navigationLinkStyle = (currentPath: string, href: string) => {
  const base = ['px-4', 'text-center', 'text-dark-copy', 'ease-in duration-100'];
  const active = [];
  if (currentPath === href) {
    active.push('text-dark-link-active');
    active.push('underline decoration underline-offset-4');
  }
  const effects = ['hover:text-dark-link-hover'];
  return [...base, ...active, ...effects].join(' ');
};
