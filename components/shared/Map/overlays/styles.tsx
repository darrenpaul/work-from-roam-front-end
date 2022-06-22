export const spotDetailOverlayContainerStyle = () => {
  const base = [
    'relative',
    'bg-form',
    'w-max',
    'translate-x-[-50%] translate-y-[-125%]',
    'shadow-lg',
    'z-40',
    'p-4',
    'border rounded',
    'w-48',
  ];
  return base.join(' ');
};

export const spotDetailContainerStyle = () => {
  const base = ['flex flex-col'];
  return base.join(' ');
};

export const spotAmenitiesContainerStyle = () => {
  const base = ['flex', 'items-center', 'gap-4', 'mb-item'];
  return base.join(' ');
};
