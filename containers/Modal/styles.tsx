export const modalContainerStyle = () => {
  return 'w-screen h-screen z-50 fixed top-0 left-0 pointer-events-none';
};

export const modalBackdropStyle = () => {
  return 'backdrop-brightness-50 backdrop-blur backdrop-contrast-50 w-screen h-screen fixed top-0 left-0 pointer-events-auto';
};

export const modalContentWrapperStyle = () => {
  return 'fixed w-screen h-screen top-0 left-0 relative flex flex-col justify-center items-center pointer-events-none';
};

export const modalContentContainerStyle = () => {
  return 'bg-red-400 p-4 pointer-events-auto';
};
