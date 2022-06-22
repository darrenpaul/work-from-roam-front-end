export const mainContainerStyle = () => {
  const base = ['w-full h-screen'];
  return base.join(' ');
};

export const gradientOverlayStyle = () => {
  const base = [
    'absolute',
    'left-0',
    'w-full h-screen',
    'brightness-50',
    'bg-gradient-to-r from-black/[0.5] to-transparent',
  ];
  return base.join(' ');
};

export const imageContainerStyle = () => {
  const base = ['absolute', 'left-0', 'w-full h-screen'];
  return base.join(' ');
};

export const contentWrapperContainerStyle = () => {
  const base = ['relative', 'w-full h-screen'];
  return base.join(' ');
};

export const contentContainerStyle = () => {
  const base = [
    'absolute',
    'top-0 left-0',
    'z-10',
    'flex flex-col justify-center',
    'w-full md:w-1/2 h-full',
    'p-sides',
    'text-left',
  ];
  return base.join(' ');
};
