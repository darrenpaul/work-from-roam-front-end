export const mainContainerStyle = () => {
  const base = ['w-full h-96'];
  return base.join(' ');
};

export const imageContainerStyle = () => {
  const base = ['absolute', 'left-0', 'w-full h-96', 'brightness-50'];
  return base.join(' ');
};

export const contentWrapperContainerStyle = () => {
  const base = ['relative', 'w-full h-96'];
  return base.join(' ');
};

export const contentContainerStyle = () => {
  const base = [
    'absolute',
    'top-0 left-0',
    'z-10',
    'flex flex-col justify-center',
    'w-1/2 h-full',
    'p-16',
    'text-left'
  ];
  return base.join(' ');
};
