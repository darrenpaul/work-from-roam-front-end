export const timeSelectorContainerStyle = ({ mt, ml }) => {
  const base = ['flex'];

  if (mt) {
    base.push(`mt-${mt}`);
  }

  if (ml) {
    base.push(`ml-${ml}`);
  }

  return base.join(' ');
};

export const floatingWindowContainerStyle = () => {
  const base = ['bg-red-400'];
  return base.join(' ');
};

export const inputContainerStyle = () => {
  const base = ['flex', 'flex-col', 'w-screen md:w-96', 'rounded', 'bg-form', 'p-4'];
  return base.join(' ');
};

export const selectorContainerStyle = () => {
  const base = ['flex'];
  return base.join(' ');
};
