export const spotsContainerStyle = () => {
  const base = ['flex', 'relative'];
  return base.join(' ');
};

export const filterContainerStyle = () => {
  const base = [
    'absolute',
    'z-40',
    'flex flex-col',
    'items-center',
    'w-full h-full',
    '-translate-x-1/2',
    'left-1/2',
    'bg-form ',
  ];
  return base.join(' ');
};

export const filterContentStyle = () => {
  const base = ['w-full md:w-96', 'mt-item'];
  return base.join(' ');
};

export const filterButtonContainerStyle = () => {
  const base = ['absolute', 'z-30', 'ml-item', 'mt-item'];
  return base.join(' ');
};
