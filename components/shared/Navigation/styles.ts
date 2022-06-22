const HEIGHT = 'h-14';

export const containerStyle = () => {
  const base = [
    'flex',
    'items-center',
    'w-screen',
    HEIGHT,
    'justify-between',
    'fixed',
    'top-0',
    'left-0',
    'bg-navigation',
    'text-dark-copy',
    'z-50',
    'px-8',
    'drop-shadow-lg',
  ];

  return base.join(' ');
};

export const menuButtonStyle = () => {
  const base = ['lg:hidden sm:flex', 'z-[99]'];

  return base.join(' ');
};

export const linksContainerStyle = (showMenu) => {
  const showMobileMenu = showMenu ? 'flex' : 'hidden lg:flex';
  const base = [
    showMobileMenu,
    'fixed lg:relative',
    'w-screen h-screen lg:w-max lg:h-full',
    'bg-navigation lg:bg-transparent',
    'top-0 left-0',
    'flex-col lg:flex-row',
    'lg:justify-end lg:items-center',
    'grow',
    'pt-14 lg:pt-0',
    'px-item md:px-0',
    'z-50',
  ];
  return base.join(' ');
};

export const buttonsContainerStyle = () => {
  const base = ['flex', 'ml-0 lg:ml-8 mt-item md:mt-0'];
  return base.join(' ');
};
