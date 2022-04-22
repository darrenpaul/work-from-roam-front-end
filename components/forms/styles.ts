export const formContainerStyle = (styles = '') => {
  const base = ['flex flex-col', 'items-center', styles];
  return base.join(' ');
};
