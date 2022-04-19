export const LOADER_COLOR = '#94a3b8';

export const loaderWrapperContainerStyle = () => {
  const base = ['z-50', 'fixed', 'top-0', 'left-0', 'pointer-events-none'];
  return base.join(' ');
};

export const pageLoaderContainerStyle = () => {
  const base = ['flex items-center justify-center', 'w-screen h-screen'];
  return base.join(' ');
};

export const loaderContainerStyle = () => {
  const base = ['flex items-center justify-center', 'w-full h-screen-3/4'];
  return base.join(' ');
};

export const loaderBackdropStyle = () => {
  const base = [
    'backdrop-brightness-50 backdrop-blur backdrop-contrast-50',
    'w-screen h-screen',
    'fixed',
    'top-0',
    'left-0',
    'flex items-center justify-center',
    'pointer-events-auto'
  ];
  return base.join(' ');
};
