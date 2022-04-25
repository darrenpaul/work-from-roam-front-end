export const pageContainerStyle = () => {
  const base = ['overflow-hidden', 'mt-14'];
  return base.join(' ');
};

export const pageContentContainerStyle = () => {
  const base = [
    'max-w-screen-xl',
    'mx-auto',
    'mb-sides',
    'px-sides',
    'min-h-[calc(100vh_-_128px)]',
  ];
  return base.join(' ');
};
