export const modalContainerStyle = () => {
  const base = ['w-screen h-screen', 'z-50', 'fixed', 'top-0 left-0', 'pointer-events-none'];
  return base.join(' ');
};

export const modalBackdropStyle = () => {
  const base = [
    'backdrop-brightness-50 backdrop-blur backdrop-contrast-50',
    'w-screen h-screen',
    'fixed',
    'top-0 left-0',
    'pointer-events-auto'
  ];
  return base.join(' ');
};

export const modalContentWrapperStyle = () => {
  const base = [
    'relative',
    'flex flex-col justify-center items-center',
    'w-screen h-screen',
    'top-0 left-0',
    'fixed',
    'pointer-events-none'
  ];
  return base.join(' ');
};

export const modalContentContainerStyle = () => {
  const base = ['bg-form', 'p-4', 'rounded', 'pointer-events-auto'];
  return base.join(' ');
};
