export const formContainerStyle = (styles = '') => {
  const base = ['flex flex-col', 'items-center', styles];
  return base.join(' ');
};

export const formInputsContainerStyle = () => {
  const base = ['flex flex-col', 'w-full md:w-screen-1/2'];
  return base.join(' ');
};
