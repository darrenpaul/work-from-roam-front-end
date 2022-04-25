export const pageContainerStyle = () => {
  const base = ['overflow-hidden', 'mt-14'];
  return base.join(' ');
};

export const pageContentContainerStyle = (bottomMargin: boolean = true) => {
  const base = ['max-w-screen-xl', 'mx-auto', 'px-sides', 'min-h-[calc(100vh_-_128px)]'];

  if (bottomMargin) {
    base.push('mb-sides');
  }
  return base.join(' ');
};
