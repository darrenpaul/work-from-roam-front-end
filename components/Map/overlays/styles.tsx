export const spotDetailOverlayContainerStyle = () => {
  const base = [
    'relative',
    'bg-zinc-50',
    'w-max',
    'translate-x-[-50%] translate-y-[-125%]',
    'shadow-lg',
    'z-40',
    'p-4',
    'border border-zinc-900 rounded'
  ];
  return base.join(' ');
};

export const spotDetailContainerStyle = () => {
  const base = ['flex flex-col'];
  return base.join(' ');
};

export const spotAmenitiesContainerStyle = () => {
  const base = ['flex', 'items-center', 'justify-between'];
  return base.join(' ');
};
